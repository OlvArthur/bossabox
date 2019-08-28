import Tool from '../models/Tools';

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
    const tags = req.query.tag;
    console.log(tags);

    if (tags) {
      const tools = await Tool.findAll({ where: { tags: req.query.tag } }).then(
        t => {
          return res.send(t);
        },
        console.log(tools)
      );
    }

    await Tool.findAll().then(tools => {
      return res.send(tools);
    });
    //return res.json({ id, title, link, description, tags });
  }
}

export default new ToolController();
