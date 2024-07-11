export default function Refer() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Refer & Earn
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How it Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Refer your friends and earn rewards when they sign up and use
                our platform. It's that simple!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Share Your Link</h3>
                    <p className="text-muted-foreground">
                      Copy your unique referral link and share it with your
                      friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Earn Rewards</h3>
                    <p className="text-muted-foreground">
                      When your friends sign up and use our platform, you'll
                      earn rewards.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Track Progress</h3>
                    <p className="text-muted-foreground">
                      Monitor your referrals and earnings in your dashboard.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src="/refer.png"
              width="650"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

    )
}