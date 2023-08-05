import { Inter } from "next/font/google";
import PageLayout from "@/components/layout/page-layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return <PageLayout />;
}
