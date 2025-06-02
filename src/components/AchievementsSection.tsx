import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: "Building2",
      number: "15000+",
      unit: "кв.м",
      description: "площади сдано",
    },
    {
      icon: "Trophy",
      number: "10+",
      unit: "проектов",
      description: "успешно реализовано",
    },
    {
      icon: "Users",
      number: "15",
      unit: "профессионалов",
      description: "в нашем штате",
    },
    {
      icon: "Heart",
      number: "10",
      unit: "проектов",
      description: "благотворительных",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Наши достижения
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={achievement.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {achievement.unit}
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
