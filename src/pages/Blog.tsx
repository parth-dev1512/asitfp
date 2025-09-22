import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Global Trade Agreements",
      excerpt: "Examining the evolution of multilateral trade frameworks in a post-pandemic world and their implications for developing economies.",
      author: "Priya Sharma",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Trade Policy",
      featured: true,
    },
    {
      id: 2,
      title: "Digital Diplomacy in the 21st Century",
      excerpt: "How technology is reshaping international relations and diplomatic engagement, from social media to AI-powered negotiations.",
      author: "Arjun Patel",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Diplomacy",
      featured: true,
    },
    {
      id: 3,
      title: "Economic Sanctions: Effectiveness and Implications",
      excerpt: "A comprehensive analysis of recent sanctions regimes and their geopolitical impact on global trade flows.",
      author: "Meera Singh",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Economic Policy",
      featured: false,
    },
    {
      id: 4,
      title: "ASEAN's Role in Regional Trade Integration",
      excerpt: "Exploring how the Association of Southeast Asian Nations is fostering economic cooperation and trade liberalization.",
      author: "Raj Kumar",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Regional Trade",
      featured: false,
    },
    {
      id: 5,
      title: "Climate Change and International Negotiations",
      excerpt: "The intersection of environmental policy and foreign relations in addressing global climate challenges.",
      author: "Anita Desai",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Environmental Policy",
      featured: false,
    },
    {
      id: 6,
      title: "Supply Chain Resilience in Global Markets",
      excerpt: "Lessons learned from recent disruptions and strategies for building more robust international supply networks.",
      author: "Vikram Gupta",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Trade Policy",
      featured: false,
    },
  ];

  const categories = ["All", "Trade Policy", "Diplomacy", "Economic Policy", "Regional Trade", "Environmental Policy"];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
          Research & Analysis
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          In-depth articles exploring the complexities of international trade,
          foreign policy, and global economic relations.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === "All" ? "default" : "outline"}
            size="sm"
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <Card key={post.id} className="group hover:shadow-medium transition-all duration-300 cursor-pointer border-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
          All Articles
        </h2>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-soft transition-all duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button variant="ghost" className="group-hover:text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  );
};

export default Blog;