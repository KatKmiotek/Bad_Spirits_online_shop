package com.codeclanexample.server.components;

import com.codeclanexample.server.models.Product;
import com.codeclanexample.server.models.ProductTypes;
import com.codeclanexample.server.repositories.OrderRepository;
import com.codeclanexample.server.repositories.ProductRepository;
import com.codeclanexample.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Product wine1 = new Product();
        Product wine2 = new Product();
        Product wine3 = new Product();
        Product wine4 = new Product();
        Product wine5 = new Product();

        Product beer1 = new Product();
        Product beer2 = new Product();
        Product beer3 = new Product();
        Product beer4 = new Product();
        Product beer5 = new Product();

        Product rum1 = new Product("Flor de Cana 7yr", 700, 10, 25.00,
                "Another gem from the Flor de Cana stable. The 7yr has hints of almond and vanilla, with a mild spiceyness",
                "Nicaraguan", 40.00, "gold", ProductTypes.RUM, "http://localhost:8080/api/images/flor_de_cana7yr.jpg");
        productRepository.save(rum1);
        Product rum2 = new Product("O'Haras Spiced Rum", 700, 10, 24.50, "Fine Caribbean rum with added spice!",
                "Carabbean", 40.00, "spiced", ProductTypes.RUM, "http://localhost:8080/api/images/o_haras_spiced_rum.jpg");
        productRepository.save(rum2);

        Product rum3 = new Product("Plantation 3 Star White Rum", 700, 10, 24.00, "Plantation 3 Star White Rum contains a blend of rums from the '3 Stars of the Caribbean', namely Jamaica, Barbados and Trinidad to create this crisp, tasty Plantation rum.",
                "Caribbean", 40.00, "white", ProductTypes.RUM, "http://localhost:8080/api/images/plantation_3_star_rum.jpg");
        productRepository.save(rum3);

        Product rum4 = new Product("Ron Abuelo 7 yr", 700, 10, 22.00, "Ron Abuelo 7 yr is a Panamanian rum made using distillery grown sugar cane and aged in white oak barrels.",
                "Panama", 40.00, "dark", ProductTypes.RUM, "http://localhost:8080/api/images/ron_abuelo_7_years.jpg");
        productRepository.save(rum4);

        Product rum5 = new Product();
//
//        Product gin1 = new Product("Audemus Pink Pepper", 700, 10, 45.00, "A wonderfully balanced spirit, the brand new Audemus Pink Pepper Gin reveals a blend of pink peppercorn, cardamom, juniper, vanilla, tonka and honey. With the final recipe taking months to perfect, Audemus Pink Pepper Gin is a handcrafted mix of 9 botanicals, with each batch taking months to finish at their distillery in France.", "France", 44.00, "Regular", ProductTypes.GIN, "http://localhost:8080/api/images/pink_pep.jpg");
//        productRepository.save(gin1);

        Product gin2 = new Product("Four Pillars Bloody Shiraz", 700, 10, 38.90, "This gin has flavours of fresh pine needles, citrus and spice, and a clear peppery, dense raspberry character. Due to a higher ABV than a sloe gin it packs a punch and is ideal in a range of cocktails.", "Australia", 37.8, "Flavoured", ProductTypes.GIN, "http://localhost:8080/api/images/four_pillars_shiraz.jpg" );
        productRepository.save(gin2);

//        Product gin3 = new Product("G12 Grapefruit & Mandarin", 700, 10, 24.99, "Distilled with fresh mandarin, this gin delivers a complex juniper led, grapefruit citrus flavour. Accentuated by hints of spice from cassia, light floral coriander, finished with sweet mandarin. Best served with a premium tonic, plenty of ice and garnished with a wedge of grapefruit.", "England", 37.5, "Flavoured", ProductTypes.GIN, "http://localhost:8080/api/images/g12_mandarin.png");
//        productRepository.save(gin3);

        Product gin4 = new Product("The Botanist", 700, 10, 36.00, "The Botanist Islay Dry Gin is made from the guys from the Bruichladdich Distillery on Islay. Packed full of 31 Botanicals, 22 of which are found on Islay.", "Scotland", 46,  "Regular", ProductTypes.GIN, "http://localhost:8080/api/images/botanist.png");
        productRepository.save(gin4);

        Product gin5 = new Product("Jaffa Cake Gin", 700, 10, 28.00, "Jaffa Cake Gin is a delicious concoction from the ingenious distillers at Atom Labs. Distilled with juniper, fresh orange peel, cocoa powder and real Jaffa cakes, the team produces and blends each batch in Kent, UK.", "England", 42, "Regular", ProductTypes.GIN, "http://localhost:8080/api/images/jaffa-cake-gin.jpg");
        productRepository.save(gin5);

    }
}
