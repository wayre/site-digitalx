import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ExamDetails {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  applications: string[];
  benefits: string[];
  imageUrl?: string;
}

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam: ExamDetails | null;
}

const ExamModal = ({ isOpen, onClose, exam }: ExamModalProps) => {
  if (!exam) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center justify-between">
            {exam.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            {exam.shortDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          {exam.imageUrl && (
            <div className="rounded-lg overflow-hidden">
              <Image
                src={exam.imageUrl}
                alt={exam.title}
                width={1940}
                height={990}
                className="w-full h-auto object-contain max-h-[330px]"
              />
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Descrição</h3>
            <p className="text-gray-600">{exam.fullDescription}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Aplicações</h3>
            <ul className="list-disc pl-5 space-y-2">
              {exam.applications.map((app, index) => (
                <li key={index} className="text-gray-600">
                  {app}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Benefícios</h3>
            <ul className="list-disc pl-5 space-y-2">
              {exam.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex justify-end">
            <Button
              onClick={() => {
                const contactElement = document.getElementById("contato");
                onClose();
                if (contactElement) {
                  setTimeout(() => {
                    contactElement.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }
              }}
              className="bg-digitalx-500 hover:bg-digitalx-600 text-white"
            >
              Agendar este exame
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExamModal;
