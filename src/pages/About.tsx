import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Target, Users, BookOpen, Award, Mail } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Arjun Patel",
      role: "President",
      description: "Economics & International Relations major with a focus on trade policy.",
      expertise: ["Trade Policy", "Economic Diplomacy"],
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      description: "Political Science major specializing in international security and foreign policy analysis.",
      expertise: ["Foreign Policy", "Security Studies"],
    },
    {
      name: "Meera Singh",
      role: "Research Head",
      description: "Economics major with research focus on development economics and international trade.",
      expertise: ["Development Economics", "Trade Analysis"],
    },
    {
      name: "Raj Kumar",
      role: "Events Coordinator",
      description: "International Relations major with experience in organizing academic conferences.",
      expertise: ["Event Management", "Regional Studies"],
    },
  ];

  const achievements = [
    "Winner of Inter-University Model UN Competition 2023",
    "Published 15+ policy briefs on international trade",
    "Hosted 25+ guest lectures by industry experts",
    "200+ active members across various disciplines",
    "Partnerships with 5 international policy institutes",
    "Research featured in national economic journals",
  ];

  const focusAreas = [
    {
      icon: Globe,
      title: "Global Trade Analysis",
      description: "Examining international trade patterns, agreements, and their economic implications.",
    },
    {
      icon: Target,
      title: "Foreign Policy Research",
      description: "Analyzing diplomatic strategies and their impact on international relations.",
    },
    {
      icon: BookOpen,
      title: "Policy Documentation",
      description: "Creating comprehensive policy briefs and research papers on current issues.",
    },
    {
      icon: Users,
      title: "Academic Engagement",
      description: "Fostering discussions and debates among students interested in international affairs.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
          About Our Society
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The Ashoka Society for International Trade and Foreign Policy is a student-led
          organization dedicated to advancing understanding of global economic relations
          and diplomatic affairs through research, discussion, and engagement.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Target className="h-6 w-6 text-primary mr-3" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To foster critical thinking and informed discourse on international trade
              and foreign policy issues while providing students with opportunities to
              engage with real-world policy challenges through research and analysis.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Globe className="h-6 w-6 text-primary mr-3" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To become a leading student organization that bridges academic learning
              with practical policy analysis, contributing meaningfully to discussions
              on India's role in the global economy and international affairs.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Focus Areas */}
      <div className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
          Our Focus Areas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <area.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
          Leadership Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-3 leading-relaxed">
                  {member.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
          Our Achievements
        </h2>
        <Card className="bg-accent border-2">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Join Us */}
      <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
        <h2 className="font-heading text-3xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Are you passionate about international affairs and global trade?
          Join our society and contribute to meaningful research and discussions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;