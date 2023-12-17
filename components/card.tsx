import { getLogoUrl, toTitleCase } from "@/lib/util";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
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

interface CardProps {
  data: PageData;
}
const InfoCard: React.FC<CardProps> = ({ data }) => {
  const extractedNames: string[] | undefined = data?.name.split("-");
  const appName: string = extractedNames
    ? toTitleCase(extractedNames[0] + " " + extractedNames[1])
    : "";
  const appVersion: string = extractedNames ? extractedNames[2] : "";
  const iconType: string = extractedNames ? extractedNames[0] : "";
  const iconUrl: string = getLogoUrl(iconType);

  return (
    <Card className="">
      <CardHeader className="flex gap-3">
        <Image
          alt={iconType}
          height={40}
          radius="sm"
          src={iconUrl}
          width={40}
        />
        <div className="flex flex-col flex-1">
          <p className="text-base">{data?.name} </p>
          <p className="text-sm text-default-400">
            {Math.round(data?.size / 1024 / 1024)} MB
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;
