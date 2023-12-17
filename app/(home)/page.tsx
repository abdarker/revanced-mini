import InfoCard from "@/components/card";
import Footer from "./_components/footer";

export default async function Page() {
  const res = await fetch(
    "https://api.github.com/repos/abdarker/revanced-magisk-module/releases/latest"
  );
  const data: any = await res.json();

  //     {
  //       url: "https://api.github.com/repos/abdarker/revanced-magisk-module/releases/assets/140968323",
  //       id: 140968323,
  //       node_id: "RA_kwDOJ8za384IZwGD",
  //       name: "reddit-revanced-v2023.50.0-all.apk",
  //       label: "",
  //       uploader: {
  //         login: "github-actions[bot]",
  //         id: 41898282,
  //         node_id: "MDM6Qm90NDE4OTgyODI=",
  //         avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
  //         gravatar_id: "",
  //         url: "https://api.github.com/users/github-actions%5Bbot%5D",
  //         html_url: "https://github.com/apps/github-actions",
  //         followers_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/followers",
  //         following_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
  //         gists_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
  //         starred_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
  //         subscriptions_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
  //         organizations_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
  //         repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
  //         events_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
  //         received_events_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
  //         type: "Bot",
  //         site_admin: false,
  //       },
  //       content_type: "application/vnd.android.package-archive",
  //       state: "uploaded",
  //       size: 108458200,
  //       download_count: 0,
  //       created_at: "2023-12-16T05:40:19Z",
  //       updated_at: "2023-12-16T05:40:22Z",
  //       browser_download_url:
  //         "https://github.com/abdarker/revanced-magisk-module/releases/download/61/reddit-revanced-v2023.50.0-all.apk",
  //     },
  //     {
  //       url: "https://api.github.com/repos/abdarker/revanced-magisk-module/releases/assets/140968317",
  //       id: 140968317,
  //       node_id: "RA_kwDOJ8za384IZwF9",
  //       name: "youtube-revanced-v18.45.43-all.apk",
  //       label: "",
  //       uploader: {
  //         login: "github-actions[bot]",
  //         id: 41898282,
  //         node_id: "MDM6Qm90NDE4OTgyODI=",
  //         avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
  //         gravatar_id: "",
  //         url: "https://api.github.com/users/github-actions%5Bbot%5D",
  //         html_url: "https://github.com/apps/github-actions",
  //         followers_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/followers",
  //         following_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
  //         gists_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
  //         starred_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
  //         subscriptions_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
  //         organizations_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
  //         repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
  //         events_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
  //         received_events_url:
  //           "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
  //         type: "Bot",
  //         site_admin: false,
  //       },
  //       content_type: "application/vnd.android.package-archive",
  //       state: "uploaded",
  //       size: 108478109,
  //       download_count: 1,
  //       created_at: "2023-12-16T05:40:13Z",
  //       updated_at: "2023-12-16T05:40:16Z",
  //       browser_download_url:
  //         "https://github.com/abdarker/revanced-magisk-module/releases/download/61/youtube-revanced-v18.45.43-all.apk",
  //     },
  //   ];
  return (
    <div className="min-h-full flex flex-col  ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 flex-1 px-6 pb-6 ">
          {data?.assets?.map((item: any, index: number) => (
            <InfoCard key={index} data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
