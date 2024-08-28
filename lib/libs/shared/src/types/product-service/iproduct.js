"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProduct = void 0;
var IProduct;
(function (IProduct) {
    let ProductType;
    (function (ProductType) {
        ProductType["NORMAL"] = "normal";
        ProductType["COMBO"] = "combo";
        ProductType["GIFT"] = "gift";
        ProductType["VIRTUAL"] = "virtual";
        ProductType["BUNDLED"] = "bundle";
    })(ProductType = IProduct.ProductType || (IProduct.ProductType = {}));
    let ProductCopyOmit;
    (function (ProductCopyOmit) {
        ProductCopyOmit["Category"] = "categories";
        ProductCopyOmit["SaleChannel"] = "salesChannel";
        ProductCopyOmit["ProductBrand"] = "product_brand_id";
        ProductCopyOmit["Tax"] = "tax";
        ProductCopyOmit["SelectionGroup"] = "selectionGroups";
        ProductCopyOmit["Supllier"] = "partner_id";
        ProductCopyOmit["Tag"] = "tags";
        ProductCopyOmit["Variant"] = "variants";
        ProductCopyOmit["VariantImage"] = "variantImage";
        ProductCopyOmit["ProductImage"] = "productImage";
        ProductCopyOmit["VariantStock"] = "variantStock";
        ProductCopyOmit["Description"] = "description";
        ProductCopyOmit["ProductPackage"] = "productPackage";
    })(ProductCopyOmit = IProduct.ProductCopyOmit || (IProduct.ProductCopyOmit = {}));
})(IProduct || (exports.IProduct = IProduct = {}));
//# sourceMappingURL=iproduct.js.map