import { TimeAwareContainer } from "@/components/TimeAwareContainer";

export default async function Home(
  props: {
    searchParams: Promise<{ name?: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const name = searchParams.name || "Semuanya";

  return <TimeAwareContainer displayName={name} />;
}
