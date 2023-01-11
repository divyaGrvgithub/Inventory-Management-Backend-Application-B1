NodeJs Assignment
Let’s Create An Inventory Management Backend Application. There are participation of a total of 5 entities.

1.  Grn
{id,createdAt, updatedAt, deleted, status(GENERATED,COMPLETED, CANCELLED),  invoiceNumber, vendorName, vendorFullAddress, grnLineItems: grnLineItem[] , date }

2.  grnLineItem
 {id,createdAt, updatedAt,deleted,  productName, quantity, stockPrice }

3.  order
{id,createdAt, updatedAt,deleted,status(GENERATED, COMPLETED,CANCELLED),  invoiceNumber, customerName, customerFullAddress, orderLineItems: orderLIneItem[], date}

4.  orderLIneItem
{id,createdAt, updatedAt,deleted,  productName, quantity, sellPrice }

5.  Item
{ id,createdAt, updatedAt,deleted, productName(unique), quantity, stockPrice, sellPrice }

Action
GRN created -> status = GENERATED, information get saved into db.
GRN completed -> status = COMPLETED, where item quantity also get updated.
Order created ->  status = GENERATED, information get saved into db.
Order completed ->status = COMPLETED, where item quantity also get updated.

APIS
/grn (post, get, put ,delete)
/grn/update-status ( post ) body { status: “COMPLETED” }, or { status: “CANCELLED” }
/order (post, get, put ,delete)
/order/update-status ( post ) body { status: “COMPLETED” }, or { status: “CANCELLED” }
/item (get)
Note: you can choose any nodejs framework and MongoDB database.
