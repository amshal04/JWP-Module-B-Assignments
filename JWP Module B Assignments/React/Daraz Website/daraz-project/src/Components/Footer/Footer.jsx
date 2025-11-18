import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/Daraz.logo.png';
import playstore from '../../assets/playst.png';
import appstore from '../../assets/appStore.png';
import appgallery from '../../assets/AppGallery.png'; 
import verified from '../../assets/Verified.png'; 


import cod from '../../assets/COD.png';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/master card.png';
import easypaisa from '../../assets/easy.png';
import darazwallet from '../../assets/Daraz wallet.png';
import jazzcash from '../../assets/jazz.png';
import unionpay from '../../assets/union.png';
import hbl from '../../assets/hbl.png';
import emi from '../../assets/EMI.png';


import pakistan from '../../assets/pakistan.png';
import bangladesh from '../../assets/Bangladesh.png';
import srilanka from '../../assets/srilanka.png';
import myanmar from '../../assets/myanmar.png';
import nepal from '../../assets/nepal.png';




import fb from '../../assets/Facebook.png';
import twitter from '../../assets/Twitter.png';
import insta from '../../assets/Instagram.png';
import youtube from '../../assets/Youtube.png';
import darazblog from '../../assets/Daraz Blog.png';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerWrapper}>
      <div className={styles.topSections}>
        <div className={styles.linkSection}>
          <h4>Customer Care</h4>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
            <li>Daraz Shop</li>
            <li>Contact Us</li>
            <li>Purchase Protection</li>
            <li>Daraz Pick up Points</li>
          </ul>
        </div>

        <div className={styles.linkSection}>
          <h4>Daraz</h4>
          <ul>
            <li>About Us</li>
            <li>Digital Payments</li>
            <li>Daraz Donates</li>
            <li>Daraz Blog</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>NTN Number: 4012118-6</li>
            <li>STRN: 1700401211818</li>
            <li>Online Shopping App</li>
            <li>Online Grocery Shopping</li>
            <li>Daraz Exclusive</li>
            <li>Daraz University</li>
            <li>Sell on Daraz</li>
            <li>Join Daraz Affiliate Program</li>
          </ul>
        </div>

        <div className={styles.downloadSection}>
           <img src={logo} alt="Daraz Logo" />
          <h4>Happy Shopping</h4>
          <p>Download App</p>
          <div className={styles.storeButtons}>
            <img src={appstore} alt="App Store" />
            <img src={playstore} alt="Google Play" />
            <img src={appgallery} alt="AppGallery" />
          </div>
        </div>
      </div>

      <div className={styles.paymentSection}>
        <div>
          <h4>Payment Methods</h4>
          <div className={styles.paymentIcons}>
            <img src={cod} alt="Cash on Delivery" />
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="MasterCard" />
            <img src={easypaisa} alt="Easypaisa" />
            <img src={darazwallet} alt="Daraz Wallet" />
            <img src={jazzcash} alt="JazzCash" />
            <img src={unionpay} alt="UnionPay" />
            <img src={hbl} alt="HBL" />
            <img src={emi} alt="EMI" />
          </div>
        </div>
        <div>
          <h4>Verified by</h4>
          <img src={verified} alt="Verified by PCI" className={styles.verifiedImg} />
        </div>
      </div>

     




       <div className={styles.footerContainer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerCol}>
            <h4>How Daraz Transformed Online Shopping in Pakistan</h4>
            <p>
            How Daraz Transformed Online
            <br /> Shopping in Pakistan
            </p>
            <p>
              Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs. Daraz prides itself on not being just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online online shopping experience and value for their purchases. Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteed.
            </p>

            <h4>
              What Makes Us Different from Other Online Shopping Platforms?
            </h4>

            <h6>
              Select from the Largest Online Marketplace in Pakistan
            </h6>
            <p>
              With over 15 million products to select from, Daraz offers its customers the most comprehensive listing of products in the country. Whether you’re looking for electronics, apparel, appliances, or groceries – there is something for everyone
            </p>
            <h6>
              Hassle Free Delivery
            </h6>
            <p>
              Online shopping is only as good as its execution and Daraz promises hassle free delivery right from the moment you order to when your package is dropped at your door. We cater to both major and smaller cities alike, and give you the choice to track your package as it makes its way to you so you always know your order status. If you are unsatisfied with any aspect of your order, we have a simple 7-day return or exchange policy.
            </p>
            <h6>
              Payment Options to Suit Every Style
            </h6>
            <p>
              You can choose to pay through a credit/debit card, opt for cash on delivery or even go for EMI (easy monthly instalments). You can also
            </p>
          </div>

          <div className={styles.footerCol}>
            <p>
              avail exclusive offers by downloading Daraz Wallet – a closed loop digital wallet that offers you a secure, easy way to make payments. We also have easypaisa & jazzcash payment method for our customers' ease
            </p>
            <h6>
              Shop from Verified Vendors
            </h6>
            <p>
              Daraz understands that online shopping in Pakistan comes with its fair share of risks. This is why with Daraz Marketplace and Daraz Mall customers have the security of choosing from verified vendors and brands from Karachi, Lahore, Islamabad and all across Pakistan. Now you’ll never have to second guess authenticity because Daraz makes sure to do it for you!
            </p>
            <h6>
              Shop Around the World with Daraz Global Collection
            </h6>
            <p>
              International sellers and local convenience come together with Daraz Global collection. Get the chance to shop online from vendors around the world without leaving the Daraz website. Featuring thousands of novelty gadgets and accessories, Daraz Global Collection offers you a selection of products that you won’t find anywhere else when you’re online shopping in Pakistan.
            </p>
            <h6>
              Avail Exclusive Discounts, Offers, and Promotions
            </h6>
            <p>
              Online shopping with Daraz means you get the chance to avail exclusive online-only promotional packages as well as discount vouchers from our vendors when you shop from their pages. Our flash sales give you customized product offers all curated with the help of our advanced AI technology so you always have deals you’ll actually be interested in!
            </p>
            <h6>
              Buy Value, not Just Goods with Daraz Care
            </h6>
            <p>
              Daraz does not just cater online shopping in Pakistan but also aims to simplify the way you give back to society. With charities spanning across sectors of education, health care, environmental preservation, and shelters, you can choose to make a big difference with a few, simple clicks.
            </p>
            <h6>
              Simplify Corporate Purchases
            </h6>
            <p>
              Who says corporate purchases need to be a complicated affair? When you opt for Daraz Corporate, you get an efficient and transparent solution for your business’ bulk purchasing needs. We’re proud to be working with some of the most prestigious organizations in Pakistan across a number of different industries.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h4>
              Top Categories & Brands
            </h4>
            <h6>
              MOBILE PHONES IN PAKISTAN
            </h6>
            <p>
              <a href="#">Apple iPhones</a>, <a href="#">Honor Mobiles</a>, <a href="#">Huawei Mobiles</a>, 
              <a href="#">Tecno Mobiles</a>, <a href="#">Redmi Mobiles</a>, <a href="#">Xiaomi Mi Mobiles</a>, 
              <a href="#">Nokia Mobiles</a>, <a href="#">OnePlus Mobiles</a>, <a href="#">Oppo Mobile Phones</a>, 
              <a href="#">Realme Mobiles</a>, <a href="#">Samsung Mobile Phones</a>, 
              <a href="#">Vivo Mobile Phones</a>, <a href="#">Mobile Accessories</a>, 
              <a href="#">Smart Watches</a>
            </p>
            <h6>LATEST LAPTOPS</h6>
<p>
  <a href="#">Dell Laptops</a>, <a href="#">HP Laptops</a>, <a href="#">Lenovo Laptops</a>, 
  <a href="#">Mouse</a>, <a href="#">Gaming Graphic Cards</a>, <a href="#">Lenovo Ideapad 3</a>, 
  <a href="#">Macbook Pro 13</a>, <a href="#">HP Probook 650 G2</a>
</p>

<h6>LED TV</h6>
<p>
  <a href="#">Changhong LED TV</a>, <a href="#">LG LED TV</a>, <a href="#">Samsung LED TV</a>, 
  <a href="#">Sony LED TV</a>, <a href="#">TCL LED TVs</a>
</p>

<h6>HOME APPLIANCES</h6>
<p>
  <a href="#">Microwave Oven</a>, <a href="#">Geyser</a>, <a href="#">Heater</a>, 
  <a href="#">Refrigerators</a>, <a href="#">Deep Freezers</a>, <a href="#">Generators</a>, 
  <a href="#">Water Dispensers</a>, <a href="#">Fans</a>, <a href="#">Room Cooler</a>, 
  <a href="#">Table Fans</a>, <a href="#">Wall Fans</a>, <a href="#">Exhaust Fans</a>, 
  <a href="#">Pedestal Fans</a>, <a href="#">Window AC</a>, <a href="#">Solar Panel</a>, 
  <a href="#">Washing Machine</a>
</p>

<h6>DSLR CAMERAS</h6>
<p>
  <a href="#">Camera Tripods</a>, <a href="#">Drones</a>, <a href="#">IP & CCTV Cameras</a>, 
  <a href="#">Nikon D7000</a>, <a href="#">Nikon D5600</a>, <a href="#">Canon 200D</a>, 
  <a href="#">Canon 1200D</a>, <a href="#">Fujifilm Instax Mini 11</a>, <a href="#">Canon M50</a>
</p>

<h6>HEALTH & BEAUTY</h6>
<p>
  <a href="#">Sunisa Foundation</a>, <a href="#">Biofad</a>, <a href="#">Janssen Facial Kit</a>, 
  <a href="#">Glutathione Injection</a>, <a href="#">Glutathione Cream</a>, <a href="#">Sauvage</a>, 
  <a href="#">Glutathione Tablets</a>, <a href="#">Glutathione Soap</a>, 
  <a href="#">Infrared Thermometers</a>, <a href="#">N95 Mask</a>
</p>

<h6>TRENDING</h6>
<p>
  <a href="#">Online Bills</a>, <a href="#">Core I5 Laptop</a>, <a href="#">Gtx 1060</a>, 
  <a href="#">Samsung A32</a>, <a href="#">Samsung A51</a>, <a href="#">Samsung A52</a>, 
  <a href="#">Samsung A71</a>, <a href="#">Samsung A72</a>, <a href="#">Samsung M31</a>, 
  <a href="#">Samsung S20</a>, <a href="#">Samsung S20 Ultra 5G</a>, <a href="#">Samsung S21</a>, 
  <a href="#">Samsung S21 Ultra</a>, <a href="#">Samsung Z Flip</a>, <a href="#">Tecno Camon 17</a>, 
  <a href="#">Tecno Spark 6</a>, <a href="#">Vivo V20</a>, <a href="#">Poco X3 Pro</a>, 
  <a href="#">Vivo V21</a>, <a href="#">Vivo V21E</a>, <a href="#">Vivo X70 Pro</a>, 
  <a href="#">Vivo Y12</a>, <a href="#">Vivo Y12S</a>, <a href="#">Vivo Y1S</a>, 
  <a href="#">Vivo Y20</a>, <a href="#">Vivo Y51</a>, <a href="#">Vivo Y51S</a>, 
  <a href="#">Oppo F19 Pro</a>, <a href="#">Oppo Reno 6</a>, <a href="#">Xiaomi Poco F3</a>, 
  <a href="#">Xiaomi Poco M3</a>, <a href="#">Xiaomi Poco X3</a>, <a href="#">Xiaomi Poco X3 GT</a>, 
  <a href="#">Xiaomi Redmi 9C</a>, <a href="#">Xiaomi Redmi Note 10 Pro</a>, 
  <a href="#">Sharp Aquos R2</a>
</p>



          </div>

          <div className={styles.footerCol}>
            <h6>WOMEN'S FASHION</h6>
<p>
  <a href="#">Al-Karam Studio</a>, <a href="#">Warda</a>, <a href="#">Salitex</a>, 
  <a href="#">Bonanza Satrangi</a>, <a href="#">Edenrobe</a>, <a href="#">Firdous</a>, 
  <a href="#">Junaid Jamshed</a>, <a href="#">Limelight</a>, <a href="#">Sana Safinaz</a>, 
  <a href="#">Mahru</a>, <a href="#">Pushup Bra</a>, <a href="#">Women Undergarments</a>
</p>

<h6>MEN'S FASHION</h6>
<p>
  <a href="#">Men's Shirts</a>, <a href="#">Men's T-Shirts</a>
</p>

<h6>ONLINE GROCERY STORE</h6>
<p>
  <a href="#">Oil & Ghee</a>, <a href="#">Basmati Rice</a>, <a href="#">Dried Fruits</a>, 
  <a href="#">Chocolates</a>, <a href="#">Mattresses</a>
</p>

<h6>ONLINE BOOK STORE</h6>
<p>
  <a href="#">English Books</a>, <a href="#">Islamic Books</a>, <a href="#">History Books</a>, 
  <a href="#">English Literature Books</a>, <a href="#">Kids Urdu Stories</a>, 
  <a href="#">Pride & Prejudice</a>, <a href="#">Harry Potter Story Books</a>, 
  <a href="#">Namal Novel</a>, <a href="#">Nimra Ahmed Novels</a>
</p>

<h6>AIR CONDITIONERS</h6>
<p>
  <a href="#">Kenwood AC</a>, <a href="#">Haier AC</a>, <a href="#">Gree AC</a>, 
  <a href="#">Dawlance AC</a>, <a href="#">Orient AC</a>, <a href="#">Ecostar AC</a>, 
  <a href="#">Inverex Solar AC</a>, <a href="#">Pel AC</a>
</p>

<h6>TOP MOBILE PHONES</h6>
<p>
  <a href="#">Nokia G20</a>, <a href="#">Redmi 9</a>, <a href="#">Realme 7 Pro</a>, 
  <a href="#">Realme C15</a>, <a href="#">Realme C21</a>, <a href="#">Vivo Y20s</a>, 
  <a href="#">Realme C11 Price in Pakistan</a>, 
  <a href="#">Itel Vision 1 Pro Price in Pakistan</a>, 
  <a href="#">Samsung Galaxy A02 Price in Pakistan</a>, 
  <a href="#">Infinix Hot 10</a>, <a href="#">Infinix Hot 8</a>, <a href="#">Infinix Hot 9</a>, 
  <a href="#">Infinix Note 10 Pro</a>, <a href="#">Infinix Note 7</a>, <a href="#">Infinix Note 8</a>, 
  <a href="#">Infinix Zero 8</a>, <a href="#">Infinix Smart 5</a>, <a href="#">iPhone 11</a>, 
  <a href="#">iPhone 12</a>, <a href="#">iPhone 12 Pro Max</a>, <a href="#">iPhone 12 Pro</a>, 
  <a href="#">iPhone 6</a>, <a href="#">Itel A25</a>, <a href="#">Mi 10T</a>, <a href="#">Nokia 105</a>, 
  <a href="#">Oppo A15</a>, <a href="#">Oppo A15S</a>, <a href="#">Oppo A53</a>, 
  <a href="#">Oppo A54</a>, <a href="#">Infinix Zero X Pro</a>, <a href="#">Infinix Zero X Neo</a>, 
  <a href="#">Oppo F19</a>, <a href="#">Oppo Reno 5</a>, <a href="#">Oppo Reno 5 Pro</a>, 
  <a href="#">Xiaomi Poco M3 Pro</a>, <a href="#">Realme 6 Pro</a>, <a href="#">Realme 8</a>, 
  <a href="#">Realme Narzo 30A</a>, <a href="#">Samsung A02S</a>, <a href="#">Samsung A11</a>, 
  <a href="#">Samsung A12</a>, <a href="#">Samsung A31</a>, <a href="#">Vivo Y33s</a>, 
  <a href="#">Infinix Note 11</a>, <a href="#">Tecno Spark 6 Go</a>, 
  <a href="#">Samsung A52s</a>, <a href="#">Samsung Tab A7 Lite</a>
</p>

<h6>SHOP WORLDWIDE WITH LAZADA</h6>
<p>
  <a href="#">Singapore</a>, <a href="#">Malaysia</a>, <a href="#">Philippines</a>, 
  <a href="#">Indonesia</a>, <a href="#">Vietnam</a>, <a href="#">Thailand</a>
</p>

<h6>SHOP WORLDWIDE WITH MIRAVIA</h6>
<p>
  <a href="#">Spain</a>, <a href="#">Portugal</a>
</p>

           
          </div>
        </div>
      </div>

<div className={styles.footerBottomWrapper}>
  <div className={styles.footerBottom}>
    <div className={styles.footerColumn}>
      <h5 className={styles.botttomHeading}>Daraz International</h5>
      <ul className={styles.countryList}>
        <li><img src={pakistan} alt="Pakistan" /><span>Pakistan</span></li>
        <li><img src={bangladesh} alt="Bangladesh" /><span>Bangladesh</span></li>
        <li><img src={srilanka} alt="Sri Lanka" /><span>Sri Lanka</span></li>
        <li><img src={myanmar} alt="Myanmar" /><span>Myanmar</span></li>
        <li><img src={nepal} alt="Nepal" /><span>Nepal</span></li>
      </ul>
    </div>

    <div className={styles.footerColumn}>
      <h5>Follow Us</h5>
      <div className={styles.socialIcons}>
        <a href="#"><img src={fb} alt="Facebook" /></a>
        <a href="#"><img src={twitter} alt="Twitter X" /></a>
        <a href="#"><img src={insta} alt="Instagram" /></a>
        <a href="#"><img src={youtube} alt="YouTube" /></a>
        <a href="#"><img src={darazblog} alt="Blog" /></a>
      </div>
    </div>

    <div className={styles.footerColumn}>
      <p>© Daraz 2025</p>
    </div>
  </div>
</div>


</div>
    </footer>
  );
};

export default Footer;
