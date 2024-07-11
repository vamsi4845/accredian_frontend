import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
export default function Testimonials() {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers who have earned rewards through our Refer & Earn program.
          </p>
        </div>
        <div className="divide-y rounded-lg border">
          <div className="grid w-full gap-4 p-8 md:grid-cols-[1fr_150px] md:gap-10">
            <div className="space-y-3 text-left">
              <p className="text-lg font-medium leading-relaxed">
                “Thanks to accredian's Refer & Earn program, I've earned fantastic rewards by sharing my favorite courses with my friends.”
              </p>
              <p className="text-base font-medium leading-relaxed text-muted-foreground">
                The process was seamless, and my friends loved the courses I recommended. It's a win-win!
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>Anna</AvatarFallback>

              </Avatar>
            </div>
          </div>
          <div className="grid w-full gap-4 p-8 md:grid-cols-[1fr_150px] md:gap-10">
            <div className="space-y-3 text-left">
              <p className="text-lg font-medium leading-relaxed">
                “I was able to refer my colleagues and earn rewards for each referral. accredian made it so easy to share the courses I love.”
              </p>
              <p className="text-base font-medium leading-relaxed text-muted-foreground">
                I appreciate the variety of courses available and the quality of the content. Highly recommend!
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/avatars/02.png" alt="Avatar" />
                <AvatarFallback>John</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="grid w-full gap-4 p-8 md:grid-cols-[1fr_150px] md:gap-10">
            <div className="space-y-3 text-left">
              <p className="text-lg font-medium leading-relaxed">
              “accredian's Refer & Earn program is fantastic! I've earned a lot by simply referring my friends to the courses I love.”
              </p>
              <p className="text-base font-medium leading-relaxed text-muted-foreground">
              The rewards are great, and the courses are even better. I'm glad I could help my friends and earn rewards at the same time.!
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/avatars/02.png" alt="Avatar" />
                <AvatarFallback>Mike</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
