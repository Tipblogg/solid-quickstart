import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
       watch{" "}
        <a href="https://skeeterart.com/ice-spice-leaked/" target="_blank">
          ice spice leaked video
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
