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

        Product beer1 = new Product("Big Drop Pine Trail Pale Ale", 330, 10, 2.50, "This dry-hopped pale ale is deliciously refreshing. The nose has hints of pine and honey. Packed full of flavour from citrus-heavy hops with a twist of fresh lime to create a crisp, zesty beer.",
                "England", 0.5, "Pale Ale", ProductTypes.BEER, "http://localhost:8080/api/images/pale_ale.jpg" );
        productRepository.save(beer1);
        Product beer2 = new Product("Bradfield Brewery - Farmers Blonde", 500, 10, 3.00, "This award-winning, very pale brilliant blonde beer has citrus and summer fruit aromas making it an extremely refreshing ale.",
                "England", 4.0, "blonde", ProductTypes.BEER, "http://localhost:8080/api/images/farmers_blonde.jpg");
        productRepository.save(beer2);
        Product beer3 = new Product("Guinness Draught Can", 440, 10, 3.50, "Iconic beer famed for its velvet texture, smooth flavour and distinctive colour.",
                "Ireland", 4.2, "Stout", ProductTypes.BEER, "http://localhost:8080/api/images/guinness_can.jpg");
        productRepository.save(beer3);
        Product beer4 = new Product("Estrella Damm Beer", 330, 10, 2.75, "Estrella Damm Beer is a pilsner beer the brings out the taste of Barcelona, where it is brewed, with it's stylish, trendy, vibrant and passionate style.",
                "Spain", 4.6, "Lager", ProductTypes.BEER, "http://localhost:8080/api/images/estrella-damm.png");
        productRepository.save(beer4);
        Product beer5 = new Product("Peroni Nastro Azzurro", 330, 10 , 2.60, "Peroni is one of the worlds most popular premium Italian lagers, crisp, refreshing and with a touch of Italian style.",
                "Italy", 5.3, "Lager", ProductTypes.BEER, "http://localhost:8080/api/images/peroni.jpg");
        productRepository.save(beer5);

        Product rum1 = new Product("Flor de Cana 7yr", 700, 10, 25.00,
                "Another gem from the Flor de Cana stable. The 7yr has hints of almond and vanilla, with a mild spiceyness",
                "Nicaraguan", 40.00, "gold", ProductTypes.RUM, "http://localhost:8080/api/images/flor_de_cana_7yr.jpg");
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

        Product gin1 = new Product();
        Product gin2 = new Product();
        Product gin3 = new Product();
        Product gin4 = new Product();
        Product gin5 = new Product();


    }
}
