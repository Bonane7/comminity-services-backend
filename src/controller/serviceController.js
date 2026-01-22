import Service from "../models/serviceModel.js";
import Category from "../models/category.js";

class ServiceController {
  static createService = async (req, res) => {
    try {
      const { title, description, categorys, price } = req.body;
      const category = await Category.findById({ categorys });
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      const userId = req.user?._id;
      if (!userId) {
        return res.status(401).json({ message: "User not autentificate" });
      }
      let service = await ServiceWorkerRegistration.create({
        title,
        description,
        categorys,
        price,
        provider: userId,
      });

      service = await service.populate([
        { path: "categorys", select: "categoryName" },
        { path: "provider", select: "name email" },
      ]);

      return res.status(201).json({
        message: "Service successfuly created"
      });
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
  };
}

export default ServiceController