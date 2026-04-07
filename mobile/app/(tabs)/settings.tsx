import AppInfo from '~/components/settings/AppInfo';
import { ListLayout } from '~/layouts';

export default function Settings() {
  return (
    <ListLayout title="Settings">
      <AppInfo />
    </ListLayout>
  );
}
