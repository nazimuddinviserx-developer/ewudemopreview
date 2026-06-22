import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/site/LoginForm";

export const Route = createFileRoute("/login/student")({
  head: () => ({ meta: [{ title: "Student Login — EWU" }, { name: "robots", content: "noindex" }] }),
  component: () => <LoginForm portal="Student" description="Course registration, results, library and fees." idLabel="Student ID" />,
});
