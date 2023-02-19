import Item from '../models/Item';

// Create item
export const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);

    res.status(201).json({
      success: true,
      item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Read items (all)
export const readItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Read item
export const readItem = async (req, res) => {
  try {
    const item = await Item.findById(req.query.id);

    if (item) {
      res.status(200).json({
        success: true,
        item,
      });
    } else {
      res.status(422).json({
        success: false,
        error,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Update item
export const updateItem = async (req, res) => {
  try {
    const itemId = req.query.id;
    const newItem = req.body;

    await Item.findOneAndUpdate({ _id: itemId }, newItem);

    res.status(200).json({
      success: true,
      item: newItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Delete item
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.query.id);

    if (!item) {
      return res.status(404).json({
        success: false,
      });
    }

    await Item.deleteOne({ _id: req.query.id });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
