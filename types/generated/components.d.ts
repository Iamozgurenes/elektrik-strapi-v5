import type { Struct, Schema } from '@strapi/strapi';

export interface CompSlide extends Struct.ComponentSchema {
  collectionName: 'components_comp_slides';
  info: {
    displayName: 'Slide';
  };
  attributes: {
    baslik: Schema.Attribute.String;
    aciklama: Schema.Attribute.Text;
  };
}

export interface CompNumber extends Struct.ComponentSchema {
  collectionName: 'components_comp_numbers';
  info: {
    displayName: 'Number';
  };
  attributes: {
    baslik: Schema.Attribute.String;
    sayi: Schema.Attribute.BigInteger;
  };
}

export interface CompCard extends Struct.ComponentSchema {
  collectionName: 'components_comp_cards';
  info: {
    displayName: 'Card';
    icon: 'crown';
  };
  attributes: {
    baslik: Schema.Attribute.String;
    aciklama: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CompBanner extends Struct.ComponentSchema {
  collectionName: 'components_comp_banners';
  info: {
    displayName: 'Banner';
    icon: 'apps';
  };
  attributes: {
    baslik: Schema.Attribute.String;
    aciklama: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'comp.slide': CompSlide;
      'comp.number': CompNumber;
      'comp.card': CompCard;
      'comp.banner': CompBanner;
    }
  }
}
