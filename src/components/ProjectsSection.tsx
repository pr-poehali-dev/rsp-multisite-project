import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ЖК «Северная звезда»",
      type: "Жилой комплекс",
      area: "45 000 м²",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      title: "Завод «Техноград»",
      type: "Промышленный объект",
      area: "120 000 м²",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&h=300&fit=crop",
    },
    {
      title: "ТЦ «Меридиан»",
      type: "Торговый центр",
      area: "25 000 м²",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Реализованные проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Примеры наших работ — от жилых комплексов до промышленных объектов
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.year}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  {project.type}
                </p>
                <div className="flex items-center text-gray-600 mb-4">
                  <Icon name="Square" size={16} className="mr-2" />
                  <span>Площадь: {project.area}</span>
                </div>
                <Button variant="outline" className="w-full">
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
            <Icon name="FolderOpen" className="mr-2" />
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
