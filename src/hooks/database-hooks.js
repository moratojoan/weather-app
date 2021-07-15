
import 'firebase/database';
import {
  useFirebaseApp
} from 'reactfire';

import { createDataBaseServices } from './firebase/database';

export function useDatabase() {
  const firebase = useFirebaseApp();
  const databaseServices = createDataBaseServices(firebase);

  return { databaseServices }
}