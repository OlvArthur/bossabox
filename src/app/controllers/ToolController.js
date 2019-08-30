import Tool from '../models/Tools';
import { Op } from 'sequelize';

class ToolController {
  async store(req, res) {
    const toolExists = await Tool.findOne({
      where: { title: req.body.title },
    });

    if (toolExists) {
      return res.status(401).json({ error: 'Tool already exists' });
    }

    const { id, title, link, description, tags } = await Tool.create(req.body);

    return res.status(201).json({
      title,
      link,
      description,
      tags,
      id,
    });
  }

  async index(req, res) {
    const tags = [];
    const tag = req.query.tag;
    tags.push(tag);

    if (req.query.tag) {
      const tools = await Tool.findAll({
        where: {
          tags: { [Op.contains]: tags },
        },
      });
      return res.json(tools);
    }

    await Tool.findAll().then(tools => {
      return res.send(tools);
    });
  }

  async delete(req, res) {
    const toolExists = await Tool.findOne({ where: { id: req.params.id } });

    if (!toolExists) {
      return res.json({ error: 'Tool not found' });
    }

    await Tool.findOne({ where: { id: req.params.id } })
      .then(tool => {
        return tool.destroy();
      })
      .then(() => {
        return res.status(204).json('Tool deleted');
      });
  }
}

export default new ToolController();
