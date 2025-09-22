const resources = [
	'product',
	'order',
	'customer',
	'shop',
	'staff',
	'inventory',
	'price_book',
] as const;

const actions = ['view', 'create', 'update', 'delete'] as const;

type Resource = (typeof resources)[number];
type Action = (typeof actions)[number];
type Permission = `${Resource}-${Action}`;

interface IPermission {
	action: Action;
	permission: Permission;
}

interface IResourcePermissions {
	resource: Resource;
	permissions: IPermission[];
}

const generatePermissions = (): IResourcePermissions[] =>
	resources.map((res) => ({
		resource: res,
		permissions: actions.map((act) => ({
			action: act,
			permission: `${res}-${act}` as Permission,
		})),
	}));

export const PermissionProperties: IResourcePermissions[] =
	generatePermissions();

export const getPermissionsByResourceName = (
	resourceName: Resource,
): IResourcePermissions[] => {
	return PermissionProperties.filter(
		(permission) => permission.resource === resourceName,
	);
};
