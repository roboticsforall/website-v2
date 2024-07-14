// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

interface GlobalNavDocumentData {}

/**
 * Global Nav document from Prismic
 *
 * - **API ID**: `global_nav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalNavDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalNavDocumentData>,
    "global_nav",
    Lang
  >;

type HomePageDocumentDataSlicesSlice =
  | ThemingSlice
  | SarthakSlice
  | HannaSlice
  | MikiasSliceSlice
  | HeroSlice;

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

export type AllDocumentTypes = GlobalNavDocument | HomePageDocument;

/**
 * Primary content in *FiftyFifty → Default → Primary*
 */
export interface FiftyFiftySliceDefaultPrimary {
  /**
   * title field in *FiftyFifty → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifty_fifty.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *FiftyFifty → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifty_fifty.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * image field in *FiftyFifty → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fifty_fifty.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * buttonText field in *FiftyFifty → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fifty_fifty.default.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * buttonLink field in *FiftyFifty → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: fifty_fifty.default.primary.buttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonlink: prismic.LinkField;
}

/**
 * Default variation for FiftyFifty Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FiftyFiftySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FiftyFiftySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FiftyFifty*
 */
type FiftyFiftySliceVariation = FiftyFiftySliceDefault;

/**
 * FiftyFifty Shared Slice
 *
 * - **API ID**: `fifty_fifty`
 * - **Description**: FiftyFifty
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FiftyFiftySlice = prismic.SharedSlice<
  "fifty_fifty",
  FiftyFiftySliceVariation
>;

/**
 * Primary content in *HannaSlice → Default → Primary*
 */
export interface HannaSliceDefaultPrimary {
  /**
   * image field in *HannaSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hanna.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * link field in *HannaSlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hanna.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * title field in *HannaSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hanna.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for HannaSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HannaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HannaSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HannaSlice*
 */
type HannaSliceVariation = HannaSliceDefault;

/**
 * HannaSlice Shared Slice
 *
 * - **API ID**: `hanna`
 * - **Description**: Hanna
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HannaSlice = prismic.SharedSlice<"hanna", HannaSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Hero Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Hero Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_text: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *HorizontalSlice → RightImage → Primary*
 */
export interface HorizontalSliceSliceDefaultPrimary {
  /**
   * title field in *HorizontalSlice → RightImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *HorizontalSlice → RightImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * buttontext field in *HorizontalSlice → RightImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.default.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * image field in *HorizontalSlice → RightImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * buttonlink field in *HorizontalSlice → RightImage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.default.primary.buttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonlink: prismic.LinkField;
}

/**
 * RightImage variation for HorizontalSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HorizontalSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HorizontalSliceSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *HorizontalSlice → leftImage → Primary*
 */
export interface HorizontalSliceSliceLeftImagePrimary {
  /**
   * title field in *HorizontalSlice → leftImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.leftImage.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *HorizontalSlice → leftImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.leftImage.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * buttontext field in *HorizontalSlice → leftImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.leftImage.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * image field in *HorizontalSlice → leftImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.leftImage.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * buttonlink field in *HorizontalSlice → leftImage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.leftImage.primary.buttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonlink: prismic.LinkField;
}

/**
 * leftImage variation for HorizontalSlice Slice
 *
 * - **API ID**: `leftImage`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HorizontalSliceSliceLeftImage = prismic.SharedSliceVariation<
  "leftImage",
  Simplify<HorizontalSliceSliceLeftImagePrimary>,
  never
>;

/**
 * Primary content in *HorizontalSlice → leftImageNoButton → Primary*
 */
export interface HorizontalSliceSliceLeftImageNoButtonPrimary {
  /**
   * title field in *HorizontalSlice → leftImageNoButton → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.leftImageNoButton.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *HorizontalSlice → leftImageNoButton → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.leftImageNoButton.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * image field in *HorizontalSlice → leftImageNoButton → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.leftImageNoButton.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * leftImageNoButton variation for HorizontalSlice Slice
 *
 * - **API ID**: `leftImageNoButton`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HorizontalSliceSliceLeftImageNoButton =
  prismic.SharedSliceVariation<
    "leftImageNoButton",
    Simplify<HorizontalSliceSliceLeftImageNoButtonPrimary>,
    never
  >;

/**
 * Primary content in *HorizontalSlice → rightImageNoButton → Primary*
 */
export interface HorizontalSliceSliceRightImageNoButtonPrimary {
  /**
   * title field in *HorizontalSlice → rightImageNoButton → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.rightImageNoButton.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *HorizontalSlice → rightImageNoButton → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.rightImageNoButton.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * image field in *HorizontalSlice → rightImageNoButton → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: horizontal_slice.rightImageNoButton.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * rightImageNoButton variation for HorizontalSlice Slice
 *
 * - **API ID**: `rightImageNoButton`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HorizontalSliceSliceRightImageNoButton =
  prismic.SharedSliceVariation<
    "rightImageNoButton",
    Simplify<HorizontalSliceSliceRightImageNoButtonPrimary>,
    never
  >;

/**
 * Slice variation for *HorizontalSlice*
 */
type HorizontalSliceSliceVariation =
  | HorizontalSliceSliceDefault
  | HorizontalSliceSliceLeftImage
  | HorizontalSliceSliceLeftImageNoButton
  | HorizontalSliceSliceRightImageNoButton;

/**
 * HorizontalSlice Shared Slice
 *
 * - **API ID**: `horizontal_slice`
 * - **Description**: HorizontalSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HorizontalSliceSlice = prismic.SharedSlice<
  "horizontal_slice",
  HorizontalSliceSliceVariation
>;

/**
 * Primary content in *MikiasSlice → Default → Primary*
 */
export interface MikiasSliceSliceDefaultPrimary {
  /**
   * Image field in *MikiasSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: mikias_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *MikiasSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mikias_slice.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *MikiasSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mikias_slice.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Link field in *MikiasSlice → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: mikias_slice.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * buttonText field in *MikiasSlice → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mikias_slice.default.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;
}

/**
 * Default variation for MikiasSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MikiasSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MikiasSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *MikiasSlice*
 */
type MikiasSliceSliceVariation = MikiasSliceSliceDefault;

/**
 * MikiasSlice Shared Slice
 *
 * - **API ID**: `mikias_slice`
 * - **Description**: MikiasSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MikiasSliceSlice = prismic.SharedSlice<
  "mikias_slice",
  MikiasSliceSliceVariation
>;

/**
 * Primary content in *Sarthak → Default → Primary*
 */
export interface SarthakSliceDefaultPrimary {
  /**
   * exampleBool field in *Sarthak → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: sarthak.default.primary.examplebool
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  examplebool: prismic.BooleanField;

  /**
   * EzampleDate field in *Sarthak → Default → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: sarthak.default.primary.ezampledate
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  ezampledate: prismic.DateField;

  /**
   * color field in *Sarthak → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: sarthak.default.primary.color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;
}

/**
 * Default variation for Sarthak Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SarthakSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SarthakSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Sarthak*
 */
type SarthakSliceVariation = SarthakSliceDefault;

/**
 * Sarthak Shared Slice
 *
 * - **API ID**: `sarthak`
 * - **Description**: Sarthak
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SarthakSlice = prismic.SharedSlice<
  "sarthak",
  SarthakSliceVariation
>;

/**
 * Default variation for Theming Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ThemingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Theming*
 */
type ThemingSliceVariation = ThemingSliceDefault;

/**
 * Theming Shared Slice
 *
 * - **API ID**: `theming`
 * - **Description**: Theming
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ThemingSlice = prismic.SharedSlice<
  "theming",
  ThemingSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GlobalNavDocument,
      GlobalNavDocumentData,
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      AllDocumentTypes,
      FiftyFiftySlice,
      FiftyFiftySliceDefaultPrimary,
      FiftyFiftySliceVariation,
      FiftyFiftySliceDefault,
      HannaSlice,
      HannaSliceDefaultPrimary,
      HannaSliceVariation,
      HannaSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HorizontalSliceSlice,
      HorizontalSliceSliceDefaultPrimary,
      HorizontalSliceSliceLeftImagePrimary,
      HorizontalSliceSliceLeftImageNoButtonPrimary,
      HorizontalSliceSliceRightImageNoButtonPrimary,
      HorizontalSliceSliceVariation,
      HorizontalSliceSliceDefault,
      HorizontalSliceSliceLeftImage,
      HorizontalSliceSliceLeftImageNoButton,
      HorizontalSliceSliceRightImageNoButton,
      MikiasSliceSlice,
      MikiasSliceSliceDefaultPrimary,
      MikiasSliceSliceVariation,
      MikiasSliceSliceDefault,
      SarthakSlice,
      SarthakSliceDefaultPrimary,
      SarthakSliceVariation,
      SarthakSliceDefault,
      ThemingSlice,
      ThemingSliceVariation,
      ThemingSliceDefault,
    };
  }
}
