// app/admin/competitions/page.tsx
import CompetitionList from "./CompetitionList";
import CreateCompetitionForm from "./CreateCompetitionForm";

export default function AdminCompetitionsPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Competitions Admin Panel</h1>

      <CreateCompetitionForm />

      <hr className="my-8" />

      <CompetitionList />
    </div>
  );
}
