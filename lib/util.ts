export function getLogoUrl(iconType: string): string {
  const iconMap: Record<string, string> = {
    youtube:
      "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s256-rw",
    messenger:
      "https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=s256-rw",
    reddit:
      "https://play-lh.googleusercontent.com/FpCCoNLOt6LRIY_3NM5Rk_LDN-kFNz0yxdFjm-CYM4XavRQfoQlXxOtgC7abfexIDOE=s256-rw",
  };

  return iconMap[iconType] || "";
}

export function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}
