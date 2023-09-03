import { React, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export default function Peoples() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiRequest = async () => {
      try {
        const responses = await Promise.all(
          Array.from({ length: 5 }, () =>
            fetch("https://randomuser.me/api/").then((response) =>
              response.json()
            )
          )
        );
        const results = responses.map((response) => response.results[0]);
        setData(results);
      } catch (error) {
        console.error("API isteği sırasında hata oluştu: ", error);
      }
    };
    apiRequest();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className="flex-con  gap-1 ml-10 "
          style={{ marginTop: "3rem", marginLeft: "5cm" }}
        >
          {data.length > 0 ? (
            data.map((person) => (
              <Card key={person.login.uuid} className="w-96 mb-7">
                <CardHeader floated={false} className="h-80">
                  <img
                    src={person.picture.large}
                    alt="profile-picture"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {person.name.first} {person.name.last}
                  </Typography>
                </CardBody>
              </Card>
            ))
          ) : (
            <p>Veriler yükleniyor...</p>
          )}
        </div>
        <div
          className="flex-con mt-3 gap-1 ml-10 "
          style={{ marginTop: "3rem", width: "40rem", marginLeft: "5cm" }}
        >
          <h1 style={{ marginLeft: "7cm" }}>Who We Are</h1>
          <div>
            <p>
              Home cooks are our heroes—it's as simple as that. Allrecipes is a
              community built by and for kitchen experts: The cooks who will
              dedicate the weekend to a perfect beef bourguignon but love the
              simplicity of a slow-cooker rendition, too. The bakers who labor
              over a showstopping 9-layer cake but will just as happily doctor
              boxed brownies for a decadent weeknight dessert. The entertainers
              who just want a solid snack spread, without tons of dirty dishes
              at the end of the night. Most importantly, Allrecipes connects
              home cooks with their greatest sources of inspiration — other home
              cooks. We're the world's leading digital food brand, and that
              inspires us to do everything possible to keep our community
              connected. Sixty-million home cooks deserve no less.
              <h2>Our History</h2>Founded in 1997 as CookieRecipe.com,
              Allrecipes changed the food world by providing the tools to share
              recipes and cooking tips, while celebrating the expertise of home
              cooks online. Since then, Allrecipes has become the world's
              largest community-driven food brand, providing trusted resources
              to more than 60 million home cooks each month. Every day, cooks
              from around the world publish recipes and inspire one another
              through recipe photos, ratings, reviews, and videos. The
              combination of the Allrecipes community with our team of editorial
              and kitchen professionals provides authority found nowhere else on
              the internet and has turned the brand into an indispensable
              resource for cooks of all skill levels. You can connect with us
              and our 11M followers on social media, too. On TikTok, learn how
              you should store avocados or find out if air fryer coconut shrimp
              lives up to the hype. On Facebook, Pinterest, and Twitter, browse
              easy weeknight meals and scour reviews of the world's best air
              fryers. Find photo-worthy dinner inspiration on Instagram. And on
              YouTube, cook along with Chef John, who serves up creative, new
              recipes weekly — alongside a few good laughs thanks to his
              well-timed puns. If you own an Amazon Alexa or Google Assistant
              device, you'll find our recipes easily discoverable via Voice
              search. Apple and Android users can access their favorite recipes
              and find dinner inspo via our Easy Recipe Ideas app.
              <h2>Above all, we are:</h2>
              Friendly We love trading ideas and hanging out with fellow home
              cooks. Supportive Struggling with dinner inspo? We’re here to
              help! Creative Cooking is an art. We like to experiment and
              express ourselves. Approachable We don't judge—all cooking levels
              and recipes are welcome. Down-to-Earth We love good food, period.
              It doesn’t need to be fussy to be great. Fun Like you, we enjoy
              friends, family, cooking, and having a good laugh. Allrecipes
              Magazine The food industry's first large-scale digital-to-print
              brand extension, Allrecipes magazine launched in 2013. Now
              published six times a year, it reaches an audience of nearly 9
              million. The magazine serves up a seasonal slice of recipes and
              real-cook wisdom from Allrecipes.com — along with the best of
              what's new from the greater food and cooking community (emerging
              trends, entertaining ideas, new products, and more). We aim for a
              mix of approachable inspiration and down-to-earth service in every
              issue. A majority of the recipes in Allrecipes magazine start with
              creations shared by home cooks on Allrecipes.com. All are tested,
              tasted, refined, edited, and professionally photographed before
              they appear in the magazine. Our editors and contributors also
              research and write about entertaining, diverse cuisines,
              Allrecipes Allstars and other fascinating cooks, kitchen decor and
              organization, cooking gadgets and gear, culinary travel, health,
              special diets, nutrition, parenting, and pets. We incorporate the
              best advice from editors, testers, and the cooking community to
              make good recipes better, great recipes easier, and every day a
              little more delicious. Sign up for a subscription now.
              <h2>The Allrecipes Community</h2>
              The heart of Allrecipes is our community of home cooks who share
              their beloved family recipes, create new recipes, and photograph,
              rate, and review each other's recipes. Each week, more than 15
              million registered members add more than 2,000 recipe ratings, 800
              new recipe photos, and almost 200 new recipes to the site. And
              every minute of every day, 27 people are saving recipes they love
              or want to try later.
              <h2>Community Guidelines</h2>
              We moderate every review and photograph added to a recipe. When
              leaving reviews, we ask that you remember that a fellow Allrecipes
              community member has shared their recipe with you. Constructive
              feedback is always welcome, but rude, mean, disrespectful, or
              spammy comments are not welcome and will not be approved.
              <h2>The Allrecipes Allstars</h2>
              Social media influencers, registered dietitians, grillmasters, and
              more seasoned home cooks make up our enthusiastic squad of 100+
              brand ambassadors. This diverse, food-loving crew spans the U.S.
              geographically and represents many different cultures,
              ethnicities, and family makeups. Since 2011, the Allstars have
              created tens of thousands of original recipes, photos, and reviews
              plus shared their cooking expertise via flat and video content on
              our website, social media, plus more marketing channels. Sound
              like fun? Apply to join the Allrecipes Allstar team. We're always
              recruiting.
              <h2>Recipe Approval and Testing</h2>
              Kitchen-Approved Recipes When Allrecipes’ readers add a recipe to
              the site, they may choose to save it as private, only share it on
              their profile page, or submit it for Kitchen Approved
              consideration. Recipes submitted to be Kitchen Approved are
              evaluated by our team of recipe editors, who ensure the
              originality and reliability of each recipe, and edit for
              Allrecipes style. Each recipe undergoes a series of reviews for:
              Duplication: Editors verify that the recipe doesn't duplicate
              another that has already been published. Completion: The
              ingredient list is evaluated to be sure it is complete, that
              measurements are correct, and that ingredients are properly
              ordered and grouped according to their use. Accuracy: Serving
              sizes and yields are checked for accuracy and to be sure that
              recipes reflect USDA dietary recommendations. Replication: Recipes
              are reviewed and edited to ensure they are replicable when
              following the instructions. Editors assess the techniques,
              equipment, and appliances used in the recipes, and explain any
              intermediate or advanced techniques with simple language and
              visuals. Health claims: Editors evaluate the use of any health or
              nutrition claims — such as healthy, low-carb, low-fat, or paleo —
              based on guidelines from the dieticians at our sister brand,
              Eating Well. Once recipes are evaluated and edited, they are not
              only reliable but also compatible with our nutrition analysis,
              scaling, shopping list, and other recipe tools. Only the best
              recipes achieve Kitchen Approved status and get published and
              promoted. After publication, the Allrecipes audience can add their
              own photos, ratings, and reviews to recipes. In the reviews, they
              share tips for making recipes even better and adjusting them to
              personal tastes or diets.
              <h2>Allrecipes Magazine Recipe Testing</h2>
              Recipes selected for publication in Allrecipes magazine get
              further scrutiny and testing.. Magazine recipes are tested one to
              four times in our test kitchens in Des Moines, Iowa, and
              Birmingham, Alabama. Trained test kitchen professionals prepare
              every recipe and then taste and evaluate it with recipe and story
              editors, confirming and clarifying all key components (including
              ingredient types and amounts, cooking procedures and times and
              temperatures, yields), and incorporating changes as needed to
              improve flavor, ease, and visual appeal. For recipes that have a
              long trail of user commentary, editors and testers also evaluate
              and incorporate suggestions from the community. Fully tested and
              edited recipes are then prepared by a food stylist for
              professional photography and reviewed again by a registered
              dietitian for nutrition and health-related tags used in the
              magazine (Healthy Pick, Vegetarian, Vegan, Gluten-Free).
              <h2>Product Reviews</h2>
              Our product reviews are independent and based on research and
              product testing — if you visit links within our content, we may
              receive commissions from your purchases, but we never receive any
              compensation or consideration for the content of our
              recommendations. Learn more about our review process.
              <h2>Diversity and Inclusion</h2>
              Allrecipes is and always has been a community built around love.
              We are people who love food, love to cook, and love to share
              recipes and stories. There is no room for hate, racism, or
              inequality in our community. The 60 million cooks who make up the
              Allrecipes audience are extraordinarily diverse. We strive to
              celebrate the home cooks who bring Allrecipes to life, featuring
              them on the website and in the pages of Allrecipes magazine. We
              are committed to the goal of having contributors, featured cooks,
              featured recipes, and stories reflect the diversity of the
              Allrecipes community in our digital properties and in the
              magazine—and know that we still have much work to do. We are
              working to highlight more of the stories and traditions of our
              diverse audience. In 2022, we are reviewing and editing content
              representing 20 percent of our traffic, with the goal of removing
              any bias in language and instances of cultural appropriation,
              including language around race, gender, sexual orientation, and
              glamorized colonialism. We are also focused on recruiting more
              diverse voices and diverse contributors to our staff, our
              freelance pool, and our Allrecipes Allstars brand ambassador
              program. And we are working to ensure that our video and voice
              programming features the same diversity as our audience. We are
              dedicated to working with recipe developers, food writers,
              editors, food stylists, photographers, videographers, podcasters,
              illustrators, and models who reflect the strength and diversity of
              our community.
              <h2>Editorial Guidelines</h2>
              At Allrecipes, we take great pride in the quality of our content.
              Our writers, photographers, and editors create original, accurate,
              and engaging content that reflects the interests and concerns of
              home cooks, and our recipe editors verify all user submissions
              before publication. Original illustrations, graphics, images, and
              videos are created by internal teams who collaborate with experts
              in their fields to produce assets that represent diverse voices,
              perspectives, and contexts. Photos and videos are not edited in
              any way that may cause them to be false or misleading. We correct
              any factual errors in a transparent manner and strive to make it
              easy for our readers to bring errors to our attention. Read our
              full integrity promise including our policies on accuracy and
              corrections, fact checking independence and impartiality, and
              originality here. At Allrecipes, we aspire to provide the highest
              quality content produced by humans, for humans. It is against our
              guidelines to publish automatically generated content using AI
              (artificial intelligence) writing tools such as ChatGPT.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
