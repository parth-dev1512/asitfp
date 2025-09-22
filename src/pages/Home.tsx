import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Globe, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const featuredPosts = [
    {
      title: "The Future of Global Trade Agreements",
      excerpt: "Examining the evolution of multilateral trade frameworks in a post-pandemic world.",
      date: "March 15, 2024",
      readTime: "8 min read",
    },
    {
      title: "Digital Diplomacy in the 21st Century",
      excerpt: "How technology is reshaping international relations and diplomatic engagement.",
      date: "March 10, 2024",
      readTime: "6 min read",
    },
    {
      title: "Economic Sanctions: Effectiveness and Implications",
      excerpt: "A comprehensive analysis of recent sanctions and their geopolitical impact.",
      date: "March 5, 2024",
      readTime: "10 min read",
    },
  ];

  const stats = [
    { icon: BookOpen, label: "Articles Published", value: "150+" },
    { icon: Users, label: "Active Members", value: "200+" },
    { icon: Globe, label: "Countries Analyzed", value: "50+" },
    { icon: TrendingUp, label: "Policy Briefs", value: "25+" },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Shaping the Future of{" "}
                <span className="text-primary">International Trade</span> & Foreign Policy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join Ashoka University's premier society dedicated to exploring
                global trade dynamics, diplomatic relations, and foreign policy
                analysis through rigorous research and thoughtful discourse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="shadow-soft">
                  <Link to="/blog">
                    Read Our Latest <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="International Trade and Foreign Policy"
                className="rounded-2xl shadow-large w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:shadow-medium transition-all duration-300">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into our latest research and analysis on global trade trends
            and foreign policy developments.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with fellow students passionate about international affairs.
            Participate in discussions, attend events, and contribute to our research.
          </p>
          <Button size="lg" className="shadow-soft">
            Get Involved
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;