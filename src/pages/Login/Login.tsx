import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FormGroup from "../../components/FormControl";
import Input from "../../components/Input";
import Label from "../../components/Label";

export default function Login() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs px-3">
      <div>
        <h1 className="text-xl font-bold mb-4 text-center">Log-In Form</h1>
      </div>
      <div>
        <FormGroup>
          <Label htmlFor="name" className="font-semibold">
            Name:
          </Label>
          <Input id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email" className="font-semibold">
            Email:
          </Label>
          <Input id="email" name="email" type="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" className="font-semibold">
            Password:
          </Label>
          <Input id="password" name="password" type="password" />
        </FormGroup>
        <div className="flex justify-between items-center mt-3">
          <FormGroup className="flex items-center !mb-0">
            <Input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="inline-block mb-0 mr-1 w-auto"
            />
            <Label
              htmlFor="remember-me"
              className="font-semibold inline-block !mb-0"
            >
              Remember me
            </Label>
          </FormGroup>
          <Link
            to="/forgot-password"
            className="text-xs text-blue-600 font-semibold hover:underline"
          >
            Forgot password
          </Link>
        </div>

        <Button className="font-semibold bg-gray-100 hover:bg-gray-200 transition duration-300 w-full mt-4">
          Login
        </Button>

        <div className="flex justify-center space-x-2 mt-3">
          <p className="font-semibold">Don't have an account? </p>
          <Link
            to="/signup"
            className="text-xs text-blue-600 font-semibold hover:underline"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
