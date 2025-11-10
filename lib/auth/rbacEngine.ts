import { fetchPerson } from "../database";
import { fetchPositions } from "../database/hr/position";
import { fetchRoles } from "../database/hr/role";

export async function flattenPermissionsFor(
  query: { _id: string } | { email: string },
) {
  return [];
}

export function checkPermission(permissions: string[], permission: string) {
  return true;
}
