const styles = {
  boxWidth: "max-w-5xl w-full",

  heading2:
    "font-space font-semibold sm:text-[48px] text-[40px] text-white dark:text-white w-full",
  heading3:
    "font-space font-semibold sm:text-[44px] text-[36px] text-white dark:text-white w-full",
  heading4:
    "font-space font-semibold sm:text-[32px] md:text-[36px] text-[28px] text-white dark:text-white w-full",
  heading5:
    "font-space font-semibold sm:text-[24px] text-[20px] text-white dark:text-white w-full",
  heading6:
    "font-space font-semibold sm:text-[20px] text-[16px] text-white dark:text-white w-full",
  paragraph:
    "font-space font-normal text-dimWhite dark:text-dimWhite text-[16px] leading-[30.8px]",
  paragraph2:
    "font-space font-normal text-dimWhite dark:text-dimWhite text-[14px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-12 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionCol: `flex flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col gap-4`,
  sectionInfoCenter: `flex flex-col justify-center items-center`,
};

export default styles;
