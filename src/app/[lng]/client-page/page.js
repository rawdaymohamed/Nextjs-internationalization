"use client";

import Link from "next/link";
import { useTranslation } from "../../i18n/client";
import { Footer } from "../components/Footer/client";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [lng, setLang] = useState("en");
  useEffect(() => {
    async function getLangParam() {
      const { lng } = await params;
      setLang(lng);
    }
    getLangParam();
  }, []);
  const { t } = useTranslation(lng, "client-page");
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{t("title")}</h1>
      {/* <p>{t("counter", { count: counter })}</p> */}
      <p>
        {counter === 0
          ? t("counter_zero")
          : counter === 1
          ? t("counter_one", { count: counter })
          : t("counter_other", { count: counter })}

        {/* {counter === 0
          ? t("counter_zero")
          : t("counter_other", { count: counter })} */}
      </p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">{t("back-to-home")}</button>
      </Link>
      <Footer lng={lng} />
    </>
  );
}
