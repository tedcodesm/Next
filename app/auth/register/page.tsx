import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create a new account</CardTitle>
        <CardDescription>
          Enter your email below to create a new account
        </CardDescription>
        <CardAction>
          <Button variant="link">LogIn</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Full Name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
            
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
               
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <Button variant="outline" className="w-full">
          Sign Up with Google
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
export default RegisterPage