import { useContracts } from "../context/ContractContext";
import { ContractStatus } from "../types/ContractStatus";
import { canTransition } from "../utils/lifecycle";

export default function Dashboard() {
  const { contracts, setContracts } = useContracts();

  const updateStatus = (id: string, next: ContractStatus) => {
    setContracts(
      contracts.map((c) =>
        c.id === id ? { ...c, status: next } : c
      )
    );
  };

  return (
    <div className="container mt-5">
      <h2>Contracts Dashboard</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Blueprint</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.blueprintName}</td>
                <td>
                  <span
                    className={`badge ${
                      c.status === ContractStatus.SIGNED ? "bg-success" :
                      c.status === ContractStatus.CREATED ? "bg-primary" :
                      c.status === ContractStatus.APPROVED ? "bg-info" :
                      c.status === ContractStatus.SENT ? "bg-warning" :
                      c.status === ContractStatus.LOCKED ? "bg-dark" :
                      "bg-danger"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td>{c.createdAt}</td>
                <td>
                  {Object.values(ContractStatus)
                    .filter((s) => canTransition(c.status, s))
                    .map((s) => (
                      <button
                        key={s}
                        className="btn btn-sm btn-outline-primary me-1 mb-1"
                        onClick={() => updateStatus(c.id, s)}
                      >
                        {s}
                      </button>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
