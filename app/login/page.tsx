import LoginForm from "@/components/union/loginForm";
interface Item {
  id: string;
  name: string;
}

interface Items extends Item {
  items: Item[];
}

const Login = async () => {
  
  return (
    <>
      <LoginForm/>
    </>
  );
};

export default Login;
