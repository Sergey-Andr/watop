import dynamic from "next/dynamic";

export const dynamicImports = () => {
  const PersonalInfo = dynamic(
    () => import("@/app/profile/components/settings/components/PersonalInfo"),
    {
      loading: () => <p>Loading Personal Info...</p>,
    },
  );
  const OrdersRecipient = dynamic(
    () =>
      import("@/app/profile/components/settings/components/OrdersRecipient"),
    {
      loading: () => <p>Loading Orders Recipient...</p>,
    },
  );
  const Contacts = dynamic(
    () => import("@/app/profile/components/settings/components/Contacts"),
    {
      loading: () => <p>Loading Contacts...</p>,
    },
  );
  const DeliveryAddress = dynamic(
    () =>
      import("@/app/profile/components/settings/components/DeliveryAddress"),
    {
      loading: () => <p>Loading Delivery Address...</p>,
    },
  );
  const LinkCard = dynamic(
    () => import("@/app/profile/components/settings/components/LinkCard"),
    {
      loading: () => <p>Loading Link Card...</p>,
    },
  );
  const Login = dynamic(
    () => import("src/app/profile/components/settings/components/Login"),
    {
      loading: () => <p>Loading Login...</p>,
    },
  );
  return {
    PersonalInfo,
    OrdersRecipient,
    Contacts,
    DeliveryAddress,
    LinkCard,
    Login,
  };
};
