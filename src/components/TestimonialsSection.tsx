import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tony Camilleri",
    subtitle: "Client Testimonial – CFI Crypto Recovery",
    amount: "$1.8M",
    content: [
      "After losing USD $1.8 million to an online investment scam, I felt hopeless and overwhelmed. Reaching out to CFI was the turning point. Their team approached my case with professionalism, patience, and a level of expertise that immediately reassured me.",
      "CFI traced the flow of my funds, identified key leads, and guided me through every recovery step with full transparency. What truly impressed me was their consistency and the way they kept me informed — no false promises, just solid investigative work and real progress.",
      "Through their structured recovery process, I regained clarity, control, and ultimately a successful financial outcome. Recovering my funds restored not only my financial position but also my peace of mind. I highly recommend CFI to anyone dealing with cryptocurrency fraud."
    ]
  },
  {
    name: "Mr. Mike",
    subtitle: "Client Testimonial",
    amount: "$2.5M",
    content: [
      "I lost $2.5 million to a crypto investment scam and genuinely believed my money was gone forever. When I contacted Crypto Fraud Intel (CFI), their team immediately took my case seriously. They traced the movement of my funds, provided clear evidence, and guided me through every step of the recovery process with honesty and professionalism.",
      "Thanks to their persistence and expertise, I was able to recover my funds and regain my financial stability. I'm extremely grateful to CFI for their dedication. Highly recommended."
    ]
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from clients who trusted us to recover their assets
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in"
            >
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  {testimonial.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>"{paragraph}"</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-primary">
                      {testimonial.amount} Successfully Recovered
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
