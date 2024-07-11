import { Link } from "react-router-dom";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md md:px-6">
      <div className="flex items-center space-x-4">
        <img src="/logo.png.svg" alt="accredian logo" className="h-10" />
        <Select>
          <SelectTrigger
            id="courses"
            className="bg-primary font-bold text-primary-foreground"
          >
            <SelectValue placeholder="Courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="course1">Product Management</SelectItem>
            <SelectItem value="course2">Strategy and Leadership</SelectItem>
            <SelectItem value="course3">Business Management</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-4 hidden md:flex">
        <Link to="#" className="text-sm" >
          Refer & Earn
        </Link>
        <Link to="#" className="text-sm"  >
          Resources
        </Link>
        <Link to="https://accredian.com/" className="text-sm"  target="_blank">
          About Us
        </Link>
        <Button variant="ghost">Login</Button>
        <Button variant="default">Try for free</Button>
      </div>
    </header>
  );
}
