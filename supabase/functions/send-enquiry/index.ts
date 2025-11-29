import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EnquiryRequest {
  firstName: string;
  lastName: string;
  phone: string;
  countryCode: string;
  email: string;
  amount?: string;
  caseType: string;
  details: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      firstName,
      lastName,
      phone,
      countryCode,
      email,
      amount,
      caseType,
      details,
    }: EnquiryRequest = await req.json();

    console.log("Received enquiry from:", email);

    // Send email to the company
    const companyEmail = await resend.emails.send({
      from: "Crypto Fraud Intel <onboarding@resend.dev>",
      to: ["jayden@cryptofraudintel.com", "Emmavalerie@cryptofraudintel.com"],
      subject: `New Enquiry: ${caseType} - ${firstName} ${lastName}`,
      html: `
        <h1>New Consultation Enquiry</h1>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        
        <h2>Case Details</h2>
        <p><strong>Type of Case:</strong> ${caseType}</p>
        ${amount ? `<p><strong>Amount Lost:</strong> $${amount} USD</p>` : ""}
        
        <h2>Message</h2>
        <p>${details.replace(/\n/g, "<br>")}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">This enquiry was submitted via the Crypto Fraud Intel website consultation form.</p>
      `,
    });

    // Send confirmation email to the user
    const userEmail = await resend.emails.send({
      from: "Crypto Fraud Intel <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Enquiry - Crypto Fraud Intel",
      html: `
        <h1>Thank you for contacting Crypto Fraud Intel</h1>
        <p>Dear ${firstName},</p>
        
        <p>We have received your enquiry and our team will review your case shortly.</p>
        
        <h2>Your Submission Details:</h2>
        <p><strong>Case Type:</strong> ${caseType}</p>
        ${amount ? `<p><strong>Amount:</strong> $${amount} USD</p>` : ""}
        
        <p>Our fraud recovery team will assess your case and contact you within 24-48 hours to discuss the best course of action.</p>
        
        <h3>What Happens Next?</h3>
        <ul>
          <li>Our team will review your case details</li>
          <li>We'll assess the best recovery strategy</li>
          <li>You'll receive a call or email with our recommendations</li>
          <li>Remember: We offer a 100% money-back guarantee if funds are not recovered</li>
        </ul>
        
        <p>If you have any urgent questions, please call us at: <strong>+1 (281) 832 5219</strong></p>
        
        <p>Best regards,<br>
        <strong>Crypto Fraud Intel Team</strong><br>
        Australia's Leading Cyber-Crime Investigation Team</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">This is an automated confirmation email. Please do not reply to this email.</p>
      `,
    });

    console.log("Emails sent successfully:", { companyEmail, userEmail });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Enquiry submitted successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-enquiry function:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
