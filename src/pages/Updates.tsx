import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink, Bell } from "lucide-react";
import tradeSummitImage from "@/assets/trade-summit.jpg";
import digitalWorkshopImage from "@/assets/digital-workshop.jpg";
import munConferenceImage from "@/assets/mun-conference.jpg";

const Updates = () => {
  const updates = [
    {
      id: 1,
      type: "Event",
      title: "Annual International Trade Summit 2024",
      description: "Join us for our flagship event featuring keynote speakers from the Ministry of External Affairs and leading trade economists.",
      date: "April 15, 2024",
      location: "Ashoka University Auditorium",
      status: "Upcoming",
      attendees: "200+ Expected",
      image: tradeSummitImage,
    },
    {
      id: 2,
      type: "Workshop",
      title: "Digital Trade Policy Workshop",
      description: "A hands-on workshop exploring the regulatory challenges and opportunities in digital trade agreements.",
      date: "March 28, 2024",
      location: "Conference Room A",
      status: "Registration Open",
      attendees: "50 seats available",
      image: digitalWorkshopImage,
    },
    {
      id: 3,
      type: "Achievement",
      title: "Research Paper Published in International Journal",
      description: "Our society's research on 'BRICS Trade Dynamics' has been published in the Journal of International Economics.",
      date: "March 20, 2024",
      location: "Online Publication",
      status: "Published",
      attendees: null,
    },
    {
      id: 4,
      type: "Competition",
      title: "Model United Nations Simulation - Success!",
      description: "Our members secured first place in the Inter-University MUN competition, representing various countries in trade negotiations.",
      date: "March 12, 2024",
      location: "Delhi University",
      status: "Completed",
      attendees: "15 participants",
      image: munConferenceImage,
    },
    {
      id: 5,
      type: "Guest Lecture",
      title: "Former Trade Negotiator to Address Society",
      description: "Dr. Rajesh Mehta, former India-US trade negotiator, will share insights on bilateral trade agreements.",
      date: "April 5, 2024",
      location: "Lecture Hall 101",
      status: "Confirmed",
      attendees: "150+ Expected",
    },
    {
      id: 6,
      type: "Publication",
      title: "New Policy Brief: India-ASEAN Trade Relations",
      description: "Our latest policy brief analyzes the potential for enhanced trade cooperation between India and ASEAN nations.",
      date: "March 18, 2024",
      location: "Society Website",
      status: "Published",
      attendees: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Registration Open":
        return "bg-green-100 text-green-800";
      case "Published":
        return "bg-purple-100 text-purple-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      case "Confirmed":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Event":
        return "🎭";
      case "Workshop":
        return "🛠️";
      case "Achievement":
        return "🏆";
      case "Competition":
        return "🥇";
      case "Guest Lecture":
        return "🎤";
      case "Publication":
        return "📄";
      default:
        return "📢";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
          Society Updates
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay informed about our latest events, achievements, publications,
          and upcoming activities in international trade and foreign policy.
        </p>
      </div>


      {/* Updates Grid */}
      <div className="grid gap-6">
        {updates.map((update) => (
          <Card key={update.id} className="group hover:scale-[1.02] hover:shadow-large transition-all duration-300 cursor-pointer overflow-hidden">
            {update.image && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={update.image} 
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getTypeIcon(update.type)}</span>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{update.type}</Badge>
                      <Badge className={getStatusColor(update.status)}>
                        {update.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {update.title}
                    </CardTitle>
                  </div>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed mt-3">
                {update.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {update.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {update.location}
                </div>
                {update.attendees && (
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {update.attendees}
                  </div>
                )}
              </div>
              {(update.status === "Registration Open" || update.status === "Upcoming") && (
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Archive Notice */}
      <div className="text-center mt-12 p-6 bg-muted rounded-lg">
        <p className="text-muted-foreground">
          Looking for older updates?{" "}
          <Button variant="link" className="p-0 h-auto text-primary">
            Browse our archive
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Updates;