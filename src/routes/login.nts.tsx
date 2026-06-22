import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/site/LoginForm";

export const Route = createFileRoute("/login/nts")({
  head: () => ({ meta: [{ title: "NTS Login , EWU" }, { name: "robots", content: "noindex" }] }),
  component: () => <LoginForm portal="Non-Teaching Staff" description="Internal HR, leave and facilities management." idLabel="Staff ID" />,
});
