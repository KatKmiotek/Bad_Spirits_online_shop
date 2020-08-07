package com.codeclanexample.server.components;

import com.codeclanexample.server.models.Product;
import com.codeclanexample.server.models.ProductTypes;
import com.codeclanexample.server.models.User;
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
        User user1 = new User("Kat Kmiotek", "123 New street", 33);
        userRepository.save(user1);
        User user2 = new User("Stuart Meldrum", "456 New street", 28);
        userRepository.save(user2);
        User user3 = new User("Craig Laws", "789 New street", 28);
        userRepository.save(user3);

        Product wine1 = new Product("El Viejo del Valle Sauvignon Gris 2019", 750, 10, 8.15, "The only Sauvignon Gris in our list – it's an aromatic cousin of Sauvignon Blanc. A fresh aroma of waxy lemons, lime and grapefruit.",
                "Chile", 13.00, "white", ProductTypes.WINE, "http://localhost:8080/api/images/el_viejo_sauv_gris.png");
        productRepository.save(wine1);
        Product wine2 = new Product("GENETIE Bourgogne Chardonnay ‘Illuminé’", 750, 10, 11.88, "A classic Chardonnay from Southern Burgundy - fine buttery and floral notes on the nose and a wine of substance and finesse on the palate. Some creamy textural notes up front reveal the discreet presence of oak.",
                "France", 13.00, "white", ProductTypes.WINE, "http://localhost:8080/api/images/genetie.png");
        productRepository.save(wine2);
        Product wine3 = new Product("Borsao Selección Blanco", 750, 10, 7.45, "Stone fruit and limey citrus aromas; with nectarine, subtle pineapple characters and a creamy mouthfeel. Gentle and well integrated oak.",
                "Spain", 13.00, "white", ProductTypes.WINE, "http://localhost:8080/api/images/borsao_white.png");
        productRepository.save(wine3);
        Product wine4 = new Product("Long Beach Shiraz", 750, 10, 7.25, "Long Beach Shiraz is an easy drinking, value for money", "Spain", 13.00, "red",
                ProductTypes.WINE, "http://localhost:8080/api/images/long_beach_shiraz_1.jpg");
        productRepository.save(wine4);
        Product wine5 = new Product("Chateauneuf du Pape Reserve des Oliviers", 750, 10, 21.20, "This Southern Rhone wine region is famous for the galets roules or 'pudding stones ' covering the ground allowing for heat retention to help enhance ripening of the grapes in the vineyards.",
                "Spain", 15.00, "red", ProductTypes.WINE, "http://localhost:8080/api/images/cdp_maison_favier.jpg");
        productRepository.save(wine5);

        Product beer1 = new Product();
        Product beer2 = new Product();
        Product beer3 = new Product();
        Product beer4 = new Product();
        Product beer5 = new Product();

        Product rum1 = new Product("Flor de Cana 7yr", 700, 10, 25.00,
                "Another gem from the Flor de Cana stable. The 7yr has hints of almond and vanilla, with a mild spiceyness",
                "Nicaraguan", 40.00, "gold", ProductTypes.RUM, "http://localhost:8080/api/images/flor_de_cana_7yr.jpg");
        Product rum2 = new Product("O'Haras Spiced Rum", 700, 10, 24.50, "Fine Caribbean rum with added spice!",
                "Carabbean", 40.00, "spiced", ProductTypes.RUM, "http://localhost:8080/api/images/o_haras_spiced_rum.jpg");
        Product rum3 = new Product("Plantation 3 Star White Rum", 700, 10, 24.00, "Plantation 3 Star White Rum contains a blend of rums from the '3 Stars of the Caribbean', namely Jamaica, Barbados and Trinidad to create this crisp, tasty Plantation rum.",
                "Caribbean", 40.00, "white", ProductTypes.RUM, "http://localhost:8080/api/images/plantation_3_star_rum.jpg");
        Product rum4 = new Product("Ron Abuelo 7 yr", 700, 10, 22.00, "Ron Abuelo 7 yr is a Panamanian rum made using distillery grown sugar cane and aged in white oak barrels.",
                "Panama", 40.00, "dark", ProductTypes.RUM, "http://localhost:8080/api/images/ron_abuelo_7_years.jpg");
        Product rum5 = new Product();

        Product gin1 = new Product();
        Product gin2 = new Product();
        Product gin3 = new Product();
        Product gin4 = new Product();
        Product gin5 = new Product();


    }
}
