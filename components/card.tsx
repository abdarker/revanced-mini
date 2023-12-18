import { getLogoUrl } from "@/lib/util";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

interface PageData {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label: string;
  uploader: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}

interface Body {
  body: string;
  html_url: string;
  published_at: string;
}

interface CardProps {
  data: PageData;
  body: Body;
}
const InfoCard: React.FC<CardProps> = ({ data, body }) => {
  const extractedNames: string[] | undefined = data?.name.split("-");
  const iconType: string = extractedNames ? extractedNames[0] : "";
  const iconUrl: string = getLogoUrl(iconType);

  return (
    <Card className="">
      <CardHeader className="flex gap-3 p-2">
        <Image
          alt={iconType}
          height={40}
          radius="sm"
          src={iconUrl}
          width={40}
        />
        <div className="flex flex-col flex-1">
          <p className="text-base">{data?.name} </p>
          <div className="flex items-center space-x-2  h-4 text-sm text-danger pt-1">
            <div>{Math.round(data?.size / 1024 / 1024)} MB</div>
            <Divider orientation="vertical" />
            <div>{data?.download_count} Downloads</div>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="">
        {(iconType == "youtube" || "music") && (
          <span className="text-sm mb-0.5">
            Install{" "}
            <Link
              className="text-sm"
              href={
                "https://github.com/TeamVanced/VancedMicroG/releases/download/v0.2.24.220220-220220001/microg.apk"
              }
            >
              Vanced Microg
            </Link>{" "}
            for non-root YouTube and YT Music.
          </span>
        )}
        <span className="text-sm mb-2">
          See{" "}
          <Link
            className="text-sm"
            href={"https://j-hc.github.io/rvmm-config-gen"}
          >
            the list
          </Link>{" "}
          of patches.
        </span>
        <p className="text-default-400 text-xs font-light">
          Release Date: {new Date(body?.published_at).toDateString()}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="p-2 flex justify-between">
        <Link isExternal href={body?.html_url} className="text-sm">
          View Source
        </Link>
        <Link
          isBlock
          color="success"
          download={true}
          className=" rounded-xl bg-success/10 text-success text-sm font-sans"
          href={data?.browser_download_url}
        >
          Download
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;
