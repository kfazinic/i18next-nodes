import { Trans, useTranslation } from "next-i18next";

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <Trans
      t={t}
      i18nKey="title.hello"
      values={{ name: `<i>carl</i>`, country: "canada" }}
    />
  );
}
