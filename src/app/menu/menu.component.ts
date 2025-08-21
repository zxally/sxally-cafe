import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'cold';
  image: string;
  isSignature?: boolean;
  isSeasonal?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
  
})
export class MenuComponent {
  selectedFilter: string = 'all';
  
  menuItems: MenuItem[] = [
    // Coffee Items
    {
      id: 1,
      name: 'Golden Happiness Latte',
      description: 'Our famous latte with house-made caramel, vanilla bean, and a hint of Himalayan pink salt.',
      price: 5.50,
      category: 'coffee',
      image: 'https://cdn.shopify.com/s/files/1/0042/5099/2758/files/golden-milk-latte.jpg',
      isSignature: true
    },
    {
      id: 2,
      name: 'Velvet Mocha',
      description: 'Single-origin chocolate melted into espresso with steamed oat milk and cocoa foam.',
      price: 5.75,
      category: 'coffee',
      image: 'https://img.freepik.com/premium-photo/top-view-white-mug-mocha-coffee-isolated-white-background',
      isSignature: true
    },
    {
      id: 3,
      name: 'Cinnamon Cloud Cappuccino',
      description: 'Double espresso with airy milk foam, dusted with Vietnamese cinnamon and nutmeg.',
      price: 4.75,
      category: 'coffee',
      image: 'https://media.istockphoto.com/id/523168818/photo/cappuccino-with-coffee-beans.jpg'
    },
    {
      id: 4,
      name: 'Saffron Espresso Bliss',
      description: 'Single-origin espresso infused with saffron and a touch of cardamom cream.',
      price: 6.00,
      category: 'coffee',
      image: 'https://cdn.kme.si/public/images-cache/1200xX/2017/09/26/24d1cc566e09a453728a1014bb1c307a',
      isSignature: true
    },
    {
      id: 5,
      name: 'Caramel Macchiato Delight',
      description: 'Espresso with caramel, vanilla, and steamed milk, topped with caramel drizzle.',
      price: 5.25,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1599581909839-6e43baae2a0d',
      isSignature: true
    },
    {
      id: 6,
      name: 'Pumpkin Spice Latte',
      description: 'Espresso with pumpkin puree, spices, and steamed milk, topped with whipped cream.',
      price: 5.75,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1637787955031-2e0189f6e727',
      isSeasonal: true
    },

    // Tea Items
    {
      id: 7,
      name: 'Jasmine Pearl Cloud',
      description: 'Hand-rolled jasmine pearls steeped at 175°F with honey blossom foam.',
      price: 4.50,
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9',
      isSignature: true
    },
    {
      id: 8,
      name: 'Golden Turmeric Chai',
      description: 'House-blend chai with fresh turmeric, black pepper, and coconut milk.',
      price: 4.75,
      category: 'tea',
      image: 'https://www.budgetbytes.com/wp-content/uploads/2017/08/Golden-Chai-duo-H.jpg',
      isSeasonal: true
    },
    {
      id: 9,
      name: 'Earl Grey Lavender Fog',
      description: 'Bergamot-infused tea with lavender syrup and vanilla cream.',
      price: 4.25,
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256'
    },
    {
      id: 10,
      name: 'Rose Petal Oolong',
      description: 'Delicate oolong tea infused with rose petals and a hint of lychee.',
      price: 5.00,
      category: 'tea',
      image: 'https://cdn.shopify.com/s/files/1/0106/7915/6799/t/3/assets/25-1629126890646.jpg',
      isSignature: true
    },
    {
      id: 11,
      name: 'Butterfly Pea Flower Tea',
      description: 'Magical color-changing tea with butterfly pea flowers, lemon, and honey.',
      price: 4.75,
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1622550447083-10f3d1b7d878',
      isSignature: true
    },
    {
      id: 12,
      name: 'Ginger Lemon Honey Tea',
      description: 'Warming tea with fresh ginger, lemon, and honey for a comforting brew.',
      price: 3.75,
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2d2'
    },

    // Cold Items
    {
      id: 13,
      name: 'Honeycomb Cold Brew',
      description: '24-hour cold brew with house honeycomb infusion and milk cloud.',
      price: 4.75,
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1551029506-0807df4e2031',
      isSignature: true
    },
    {
      id: 14,
      name: 'Strawberry Basil Lemonade',
      description: 'Fresh-pressed strawberries, basil syrup, and sparkling lemonade.',
      price: 4.50,
      category: 'cold',
      image: 'https://itsavegworldafterall.com/wp-content/uploads/2021/05/Strawberry-Basil-Lemonade-6.jpg',
      isSeasonal: true
    },
    {
      id: 15,
      name: 'Matcha Coconut Shakerato',
      description: 'Ceremonial matcha shaken with coconut water and agave over ice.',
      price: 5.25,
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c'
    },
    {
      id: 16,
      name: 'Mango Passion Spritz',
      description: 'Mango puree and passion fruit juice with sparkling water.',
      price: 4.75,
      category: 'cold',
      image: 'https://images.ctfassets.net/tlircn1cnxbm/3r35F8qVtSNCnaumrSJC2T',
      isSeasonal: true
    },
    {
      id: 17,
      name: 'Iced Vanilla Orchid Latte',
      description: 'Cold brew with vanilla orchid syrup and oat milk cream.',
      price: 5.00,
      category: 'cold',
      image: 'https://www.cafedumonde.co.uk/media/ovnh0ajw/vanilla-latte-iced.jpg'
    },
    {
      id: 18,
      name: 'Nitro Cold Brew',
      description: 'Smooth nitro-infused cold brew with a creamy cascade.',
      price: 4.50,
      category: 'cold',
      image: 'https://images.unsplash.com/photo-1563809699-1b51cab2694c'
    }
  ];

  get filteredItems(): MenuItem[] {
    if (this.selectedFilter === 'all') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedFilter);
  }

  filterItems(filter: string): void {
    this.selectedFilter = filter;
  }
}
