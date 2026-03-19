import { UserInfoCard } from '../../components/UserInfoCard';
import { VIPCard } from '../../components/VIPCard';
import { CommonFunctions } from '../../components/CommonFunctions';
import { MoreFunctions } from '../../components/MoreFunctions';
import { BottomTabBar } from '../../components/BottomTabBar';

export const My = () => {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <div className="flex-1 max-w-sm mx-auto w-full">
        {/* User Info Card */}
        <UserInfoCard />

        {/* VIP Card */}
        <VIPCard />

        {/* Common Functions */}
        <CommonFunctions />

        {/* More Functions */}
        <MoreFunctions />
      </div>

      {/* Bottom Tab Bar */}
      <div className="max-w-sm mx-auto w-full">
        <BottomTabBar />
      </div>
    </div>
  );
};
