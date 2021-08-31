import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

import Page from "@components/layout/common/page";
import MainServicesSection from "@components/layout/homepage/main-services";
import HeroSection from "@components/layout/homepage/hero-section";
import TitledGrid from "@components/layout/common/titled-grid";
import WhoWeAre from "@components/layout/homepage/who-are-we";
import TestimonialsSection from "@components/layout/homepage/testimonials";

import React, { useEffect, useState } from "react";
import StaticCard from "@components/static-card";
import CallRequest from "@components/layout/common/call-request";
import {
  getAssetUrl,
  getMultipleEntries,
  getSingleEntry,
  serializeAssetUrls,
} from "utils/contentful";

interface Props {
  services: Service[];
  testimonials: Testimonial[];
  partners: Partner[];
  company: Company;
}

const HomePage: React.FC<Props> = ({
  services,
  testimonials,
  partners,
  company,
}: Props): JSX.Element => {
  const [upperBound, setUpperBound] = useState<number>(6);

  useEffect(() => {
    setUpperBound(window.innerWidth > 1200 ? 6 : 4);
  }, []);

  return (
    <Page title="Experts 4 You - Your trusted partner in business">
      <HeroSection
        title={company.title}
        subText={company.tagline}
        stats={company.stats}
        image={company.image}
      />
      <MainServicesSection services={services} />

      <WhoWeAre />
      <TitledGrid
        heading="Why us"
        subHeading={`We are to assist on how to full fill your financial responsibilities today, confirming tomorrow to be, "all perfect".`}
        id="why-us"
      >
        {company.values.map((value, index) => (
          <StaticCard content={value} key={`static-card-${index}`} />
        ))}
      </TitledGrid>
      <TestimonialsSection testimonials={testimonials} partners={partners} />
      <CallRequest />
    </Page>
  );
};

const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  // fetch company data
  const companyResult: ContentfulCompanyFields =
    await getSingleEntry<ContentfulCompanyFields>("42ugWEZ7Ku9wTqifwTwO7N");

  const company: Company = {
    ...companyResult,
    industries: companyResult.industries.map((ind) =>
      serializeAssetUrls(ind.fields, "icon")
    ),
    values: companyResult.values.map((value) =>
      serializeAssetUrls(value.fields, "icon")
    ),
    image: serializeAssetUrls(companyResult.image.fields, "src"),
  };

  // fetch partners
  const partnerResult: ContentfulPartnerFields[] =
    await getMultipleEntries<ContentfulPartnerFields>("partner");

  const partners: Partner[] = partnerResult.map((partner) => ({
    ...partner,
    image: serializeAssetUrls(partner.image.fields, "src"),
  }));

  // fetch testimonials
  const testimonialResult: ContentfulTestimonialFields[] =
    await getMultipleEntries<ContentfulTestimonialFields>("testimonial");

  const testimonials: Testimonial[] = testimonialResult.map((testimonial) => ({
    ...testimonial,
    image: serializeAssetUrls(testimonial.image.fields, "src"),
  }));

  // fetch services data from CMS
  const servicesResult: ContentfulServiceFields[] =
    await getMultipleEntries<ContentfulServiceFields>("service");

  const services: Service[] = servicesResult.map((res) => ({
    ...res,
    faqs: res.faqs.map((faq) => faq.fields),
    steps: res.steps.map((step) => ({
      ...step.fields,
      icon: getAssetUrl(step.fields.icon),
    })),
    image: serializeAssetUrls(res.image.fields, "src"),
    icon: getAssetUrl(res.icon),
  }));

  return {
    props: {
      services,
      testimonials,
      company,
      partners,
    },
  };
};

export { getStaticProps };
export default HomePage;
