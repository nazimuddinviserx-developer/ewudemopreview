import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/site/LoginForm";

export const Route = createFileRoute("/login/faculty")({
  head: () => ({ meta: [{ title: "Faculty Login , EWU" }, { name: "robots", content: "noindex" }] }),
  component: () => <LoginForm portal="Faculty" description="Access courses, gradebook and research tools." idLabel="Faculty ID" />,
});
