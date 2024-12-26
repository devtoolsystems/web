import { getRelativeLocaleUrl } from "astro:i18n";
import type { languageList } from "i18n/ui";
import { useTranslations } from "i18n/utils";



export const servicesPageHelper = ({currentLang}:{currentLang:string}) => {

    const translateLabels = useTranslations(
        currentLang as keyof typeof languageList,
      );

    const pricing = [
        {
          name:  translateLabels("services.one.name"),
          //price: "Free",
          //popular: false,
          features: [
          translateLabels("services.one.features.one"),
          translateLabels("services.one.features.two"),
          translateLabels("services.one.features.three"),
            //   "Astro Sub domain",
            //   "Basic Integrations",
            //   "Community Support",
          ],
          button: {
            text:  translateLabels("services.one.button.text"),
            link: `${getRelativeLocaleUrl(currentLang, "/contact")}`,
          },
        },
        {
          name:  translateLabels("services.two.name") ,
          // price: {
          //   monthly: "$19",
          //   annual: "$16",
          //   discount: "10%",
          //   original: "$24",
          // },
          //popular: true,
          features: [
          translateLabels("services.two.features.one"),
          translateLabels("services.two.features.two"),
            //   "20 Custom domains",
            //   "Unlimited Collaborators",
            //   "Advanced Integrations",
            //   "Priority Support",
          ],
          button: {
            text:  translateLabels("services.two.button.text") ,
            link: `${getRelativeLocaleUrl(currentLang, "/contact")}`,
          },
        },
        {
          name:  translateLabels("services.three.name"),
          //price: "Custom",
          popular: false,
          features: [
          translateLabels("services.three.features.one"),
          translateLabels("services.three.features.two"),
          translateLabels("services.three.features.three"),
            //   "Dedicated Account Manager",
            //   "24/7 Phone Support",
          ],
          button: {
            text:  translateLabels("services.three.button.text"),
            link: `${getRelativeLocaleUrl(currentLang, "/contact")}`,
          },
        },
        //   {
        //     name: "Enterprise",
        //     price: "Custom",
        //     popular: false,
        //     features: [
        //       "All Pro Features",
        //       "Unlimited Custom domains",
        //       "99.99% Uptime SLA",
        //       "SAML & SSO Integration",
        //       "Dedicated Account Manager",
        //       "24/7 Phone Support",
        //     ],
        //     button: {
        //       text: "Contact us",
        //       link: "/contact",
        //     },
        //   },
      ];

    return pricing
}

