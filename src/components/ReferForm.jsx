import { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ReferForm() {
  const [selectedCourse, setSelectedCourse] = useState("Product Management");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      friendsName: e.target.friendsName.value,
      friendsEmail: e.target.friendsEmail.value,
      course: selectedCourse,
    };
    try {
      const response = await fetch("http://localhost:3000/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      } else {
        alert("Failed to submit referral. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Refer Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Refer a Friend</DialogTitle>
          <DialogDescription>
            Fill in the details to refer a friend. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        {isSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          Referral submitted successfully!
        </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="name" className="col-span-2 text-right">Your Name</Label>
              <Input id="name" name="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="email" className="col-span-2 text-right">Your Email</Label>
              <Input id="email" name="email" type="email" className="col-span-3" />
            </div>
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="friendsName" className="col-span-2 text-right">Friend's Name</Label>
              <Input id="friendsName" name="friendsName" className="col-span-3" />
            </div>
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="friendsEmail" className="col-span-2 text-right">Friend's Email</Label>
              <Input id="friendsEmail" name="friendsEmail" type="email" className="col-span-3" />
            </div>
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="course" className="col-span-2 text-right">Select Course</Label>
              <Select name="course" value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Product Management">Product Management</SelectItem>
                  <SelectItem value="Strategy and Leadership">Strategy and Leadership</SelectItem>
                  <SelectItem value="Business Management">Business Management</SelectItem>
                  <SelectItem value="Fintech">Fintech</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Refer Now</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
